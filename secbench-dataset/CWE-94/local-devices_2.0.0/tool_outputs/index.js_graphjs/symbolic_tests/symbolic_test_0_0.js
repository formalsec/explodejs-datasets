var ip = require('ip')
var os = require('os')
var net = require('net')
var cp = require('mz/child_process')

var parseLinux = require('./parser/linux')
var parseWin32 = require('./parser/win32')
var parseRow = require('./parser')

var servers = getServers()
var lock = {}

/**
 * Finds all local devices (ip and mac address) connectd to the current network.
 */
module.exports = function findLocalDevices (address) {
  var key = String(address)
  lock[key] =
    lock[key] ||
    (address
      ? pingServer(address).then(arpOne)
      : pingServers().then(arpAll)
    ).then(unlock(key))
  return lock[key]
}

/**
 * Gets the current list of possible servers in the local networks.
 */
function getServers () {
  var interfaces = os.networkInterfaces()
  var result = []

  for (var key in interfaces) {
    var addresses = interfaces[key]
    for (var i = addresses.length; i--;) {
      var address = addresses[i]
      if (address.family === 'IPv4' && !address.internal) {
        var subnet = ip.subnet(address.address, address.netmask)
        var current = ip.toLong(subnet.firstAddress)
        var last = ip.toLong(subnet.lastAddress) - 1
        while (current++ < last) result.push(ip.fromLong(current))
      }
    }
  }

  return result
}

/**
 * Sends a ping to all servers to update the arp table.
 */
function pingServers () {
  return Promise.all(servers.map(pingServer))
}

/**
 * Pings and individual server to update the arp table.
 */
function pingServer (address) {
  return new Promise(function (resolve) {
    var socket = new net.Socket()
    socket.setTimeout(1000, close)
    socket.connect(80, address, close)
    socket.once('error', close)

    function close () {
      socket.destroy()
      resolve(address)
    }
  })
}

/**
 * Reads the arp table.
 */
function arpAll () {
  return cp.exec('arp -a').then(parseAll)
}

/**
 * Parses arp scan data into a useable collection.
 */
function parseAll (data) {
  if (!data || !data[0]) {
    return []
  }

  if (process.platform.includes('linux')) {
    var rows = data[0].split('\n')
    return rows.map(function (row) {
      return parseLinux(row, servers)
    }).filter(Boolean)
  } else if (process.platform.includes('win32')) {
    var winRows = data[0].split('\n').splice(1)
    return winRows.map(function (row) {
      return parseWin32(row, servers)
    }).filter(Boolean)
  }

  return data[0]
    .trim()
    .split('\n')
    .map(function (row) {
      return parseRow(row, servers)
    })
    .filter(Boolean)
}

/**
 * Reads the arp table for a single address.
 */
function arpOne (address) {
  return cp.exec('arp -n ' + address).then(parseOne)
}

/**
 * Parses a single row of arp data.
 */
function parseOne (data) {
  if (!data || !data[0]) {
    return
  }

  if (process.platform.includes('linux')) {
    // ignore unresolved hosts (can happen when parseOne returns only one unresolved host)
    if (data[0].indexOf('no entry') >= 0) {
      return
    }

    // remove first row (containing "headlines")
    var rows = data[0].split('\n').slice(1)[0]
    return parseLinux(rows, servers, true)
  } else if (process.platform.includes('win32')) {
    return // currently not supported
  }

  return parseRow(data[0], servers)
}

/**
 * Clears the current promise and unlocks (will ping servers again).
 */
function unlock (key) {
  return function (data) {
    lock[key] = null
    return data
  }
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let address = esl_symbolic.string("address");
module.exports(address);
