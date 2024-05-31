var util = require('util');

module.exports = extend;

function extend(A,B,as,isAargs){

	var ___A___ = A;
	var ___B___ = B;
	if(arguments.length < 2){
		throw new Error('arguments is error!');
	}

	var args = "";

	if(arguments.length > 2){

	  if(isAargs){
	  }else{
		args = 'var args = '+JSON.stringify(as)+';';
	  }
	}

	var s = A.toString();
	var footer = '}'
	var header = s.match(/^(function)(.)*{/gi);
	var e = '';
	if(isAargs){e += '___B___.apply(this,arguments);'}else{e += '___B___.apply(this);';}
	e+='___A___.apply(this,arguments)';
	var ss  =  header+e+footer
	console.log(args)
	var nn = eval('('+ss+')');
	var ap = A.prototype;
	util.inherits(nn,B);

	for(var k in B){
		nn[k] = B[k];
	}

	for(var k in A){
		nn[k] = A[k];
	}
	
	for(var k in ap){
		nn.prototype[k] = ap[k];
	}

	return nn;
}


let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: code-injection
let A = { prototype: { *: esl_symbolic.any("*") }
        , *: esl_symbolic.any("*") };
let B = { *: esl_symbolic.any("*") };
let as = esl_symbolic.any("as");
let isAargs = esl_symbolic.any("isAargs");
module.exports(A, B, as, isAargs);
