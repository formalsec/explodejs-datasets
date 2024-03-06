var assert = require('assert');
var minux = require('./index');


minux().set({
	a: 1,
	b: 2,
	c: {
		d: [1, 2, 3, 4, 5],
		e: {
			f: {
				g: 2
			}
		}
	}
});

assert(minux().get('a') === 1);
assert(minux().get('c.d[0]') === 1);
assert(minux('c.d').get('[0]') === 1);
assert(minux('c.e').get('f.g') === 2);

minux().set({ a: 2 });

assert(minux().get('a') === 2);
assert(minux().get('b') === 2);

minux('a').set(2);
assert(minux().get('a') === 2);

minux('a').set({
	a1: 1,
	a2: {
		a21: 1
	}
});

assert(minux().get('a.a1') === 1);
assert(minux().get('a.a2.a21') === 1);

minux('a').set('a2.a21', 3);
assert(minux().get('a.a2.a21') === 3);

minux('a.a2.a21').set(5);
assert(minux().get('a.a2.a21') === 5);

minux('a.a2').set({ a22: 6 });

assert(minux().get('a.a2.a21') === 5);
assert(minux().get('a.a2.a22') === 6);

minux('a.a2').set('a22', {a221: 6});
minux('a').set('a2.a22', {a222: 'a222'});

assert(minux().get('a.a2.a22.a221') === 6);
assert(minux().get('a.a2.a22.a222') === 'a222');

minux('a.a2.a22').replace(2);
assert(minux().get('a.a2.a22.a222') === undefined);
assert(minux().get('a.a2.a22') === 2);

console.log('-----Test notify------');
minux('a.a2.a21').on(function() {
	console.log('Value of a.a2.a21 changed to: ', JSON.stringify(minux('a.a2.a21').value()));
})

minux('a.a2').on(function() {
	console.log('Value of a.a2 changed to: ', JSON.stringify(minux('a.a2').value()));
});

minux('a').on(function() {
	console.log('Value of a changed to: ', JSON.stringify(minux('a').value()));
});

console.log('> a.a2.a23 = 1');
minux().set('a.a2', {
	a23: 1
});
console.log('\n\n');

console.log('> a.a2.a21.a211 = 1');
minux().set('a.a2.a21', {
	a211: 1
});
console.log('\n\n');

console.log('GOOD JOB!')