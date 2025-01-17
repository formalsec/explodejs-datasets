// UMD shim generated by Browserify
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.deepSet=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/**
 * Sets a value of a property in an object tree.
 * Missing objects will (optionally) be created.
 *
 *     var deepSet = require('deep-set')
 *     var obj = { one: { two: { three: 'sad' } } }
 *     deepSet(obj, 'one.two.three', 'yay')
 *     // { one: { two: { three: 'yay' } } }
 *
 * 
 * @param  {object} obj          The object.
 * @param  {string} path         The property path, separated by dots.
 * @param  {*}      value        The value to set.
 * @param  {boolean} create      Whether to create missing objects along the way.
 * @return {object}              The manipulated object.
 */
module.exports = function deepSet (obj, path, value, create) {
  var properties = path.split('.')
  var currentObject = obj
  var property

  create = create === undefined ? true : create

  while (properties.length) {
    property = properties.shift()
    
    if (!currentObject) break;
    
    if (!isObject(currentObject[property]) && create) {
      currentObject[property] = {}
    }

    if (!properties.length){
      currentObject[property] = value
    }
    currentObject = currentObject[property]
  }

  return obj
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
},{}]},{},[1])(1)
});
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let obj = [ esl_symbolic.string("obj0") ];
let path = esl_symbolic.string("path");
let value = esl_symbolic.any("value");
let create = esl_symbolic.any("create");
module.exports(obj, path, value, create);
console.log(({}).toString);
