/* 
Copyright @ Michael Yang 
License MIT
*/
'use strict'

var fs=require("fs")
var http=require("http")
var path=require("path")
var co=require("co")
var _util=require("util_extend_exclude")
var spawn=require("child_process").spawn

var HTTP_HOST = '0.0.0.0'
var HTTP_PORT = 8080
var WS_PORT = 1280

var ROUTE = {
	'/'		: 	'/client.html',
}
var MIME = {
	'.js'	:	'application/javascript',
	'.json'	:	'application/json',
	'.css'	:	'text/css',
	'.png'	:	'image/png',
}

// helper function
function arrayLast(arr){
	if(arr.length) return arr[arr.length-1]
}

// create Http Server
var HttpServer = http.createServer(function(req,res){
	console.log( (new Date).toLocaleString(), req.method, req.url )

	var filePath = req.url
	filePath = '.' + (ROUTE[filePath] || filePath)

	var ext = path.extname(filePath)
	var contentType = MIME[ext] || 'text/html'

	fs.readFile(filePath, function(err, data) {
		if(err){
			res.statusCode=404
			return res.end()
		}
		res.writeHeader(200, {'Content-Type':contentType})
		res.end(data, 'utf8')
	})
})
HttpServer.listen(HTTP_PORT, HTTP_HOST)

console.log('server started at %s:%s', HTTP_HOST, HTTP_PORT )

var EventCache = []
var ViewportCache = []
// create WS Server
var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({ port: WS_PORT })

wss.on('connection', function connection(ws) {

  ws.on('close', function incoming(code, message) {
    console.log("WS close: ", code, message)
  })

  ws.on('message', function incoming(message) {
    // console.log('received: %s', message)
    var msg; try{ msg=JSON.parse(message) }catch(e){ msg=message }
    if(typeof msg!=='object') return;
    switch(msg.type){

      case 'connection':
        ws.name = msg.name
        broadcast({ meta:'clientList', data:clientList() })
        break

      // command from client.html or phantom
      case 'command':
        if(msg.meta=='server'){
          try{
            msg.result = eval( msg.data )
          }catch(e){
            msg.result = e.stack
          }
          delete msg.data
          msg.type = 'command_result'
          ws._send( msg )
          return
        }

	  case 'window_resize':
	  case 'window_scroll':
      	ViewportCache.push(msg)

      default:
        if( ws.name==='client' ){
        	EventCache.push( { time:Date.now(), msg:_util._extend({}, msg), viewport: arrayLast(ViewportCache) } )
        	toPhantom(msg)
        } else {
        	toClient(msg)
        }
        break

    }
  })

  ws._send = function(msg){
    if(ws.readyState!=1) return
    ws.send( typeof msg=='string' ? msg : JSON.stringify(msg) )
  }

  ws._send( {type:'ws', msg:'connected to socket 8080'} )

})

var STOPPED = 0, STOPPING = 1, PAUSING = 2, PAUSED = 4, RUNNING = 8
class EventPlayBack{
	constructor(){
		this.status = STOPPED
		this.resume = () => {}
		this.cancel = () => {}
	}

	play(){
		var self = this
		if(self.status === RUNNING) return;
		if(self.status === PAUSED) return self.resume();
		if(EventCache.length<3)return;
		let prev = EventCache[2]
		let last = arrayLast(EventCache)
		client_console('begin playback, total time:', last.time-prev.time, '(ms)' )
		co(function *(){
			for(let i=2, n=EventCache.length; i<n; i++){
				if(self.status===STOPPING) {
					self.cancel()
					self.status = STOPPED
					return 'playback stopped'
				}
				if(self.status===PAUSING) {
					yield new Promise( (resolve, reject) => {
						self.status = PAUSED
						self.resume = () => {
							self.status = RUNNING
							self.resume = () => {}
							resolve()
						}
						self.cancel = () => {
							self.status = STOPPED
							self.cancel = () => {}
							reject('canceled')
						}
					})
				}
				let e=EventCache[i]
				let inter = e.time-prev.time
				let result = yield new Promise( (resolve, reject) => {
					setTimeout( () => {
						// client_console(e.time, e.msg.type, e.msg.data)
						toPhantom(e.msg)
						toClient(e.viewport)
						prev = e
						resolve(true)
					}, inter )
				})
			}
			return 'playback complete'
		}).then( (ret) => {
			self.status = STOPPED
			client_console(ret)
		}, (err) => {
			self.status = STOPPED
			client_console('playback incomplete:', err)
		})
	}

	pause(){
		this.status = PAUSING
	}

	stop(){
		this.status = STOPPING
	}

}

var playBack = new EventPlayBack()

function clientList(){
  return wss.clients.map((v,i)=>v.name)
}
function findClient(name){
  return wss.clients.find((v,i)=>v.name==name)
}
function toClient(msg){
  var client = findClient('client')
  if(client) client._send(msg)
}
function toPhantom(msg){
  var phantom = findClient('phantom')
  if(phantom) phantom._send(msg)
}
function client_console(){
	var msg = ''
	for(let i=0; i<arguments.length; i++) msg+=arguments[i]+' ';
  	toClient( {type:'console_message', data: (new Date).toLocaleString() + ' [server] '+ msg} )
}

function broadcast(data) {
  wss.clients.forEach(function each(client) {
    data.type='broadcast'
    client._send(data);
  })
}


// Phantom

var ls = spawn("phantomjs", ['--config', 'phantom.config', "ptest.js"], {pwd:__dirname, stdio: "pipe" });

ls.stdout.setEncoding("utf8");
ls.stderr.setEncoding("utf8");
ls.stdout.on("data",function (data) {
	console.log('stdout', data);
})
ls.stderr.on("data",function (data) {
	console.log('stderr', data);
})
ls.on("close", function (code) {
	console.log('close', code)
})
ls.on("error", function (code) {
	console.log('error', code);
})

