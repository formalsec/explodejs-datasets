# slash-prop

> Get, set, or delete a property from a nested object using a slash path

based on dot-prop by Sindre Sorhus
## Install

```
$ npm install --save slash-prop
```


## Usage

```js
const slashProp = require('slash-prop');

// getter
slashProp.get({foo: {bar: 'unicorn'}}, 'foo/bar');
//=> 'unicorn'

slashProp.get({foo: {bar: 'a'}}, 'foo/notDefined/deep');
//=> undefined

slashProp.get({foo: {'dot/dot': 'unicorn'}}, 'foo/dot\\/dot');
//=> 'unicorn'

// setter
const obj = {foo: {bar: 'a'}};
slashProp.set(obj, 'foo.bar', 'b');
console.log(obj);
//=> {foo: {bar: 'b'}}

slashProp.set(obj, 'foo/baz', 'x');
console.log(obj);
//=> {foo: {bar: 'b', baz: 'x'}}

// deleter
const obj = {foo: {bar: 'a'}};
slashProp.delete(obj, 'foo/bar');
console.log(obj);
//=> {foo: {}}

obj.foo.bar = {x: 'y', y: 'x'};
slashProp.delete(obj, 'foo/bar/x');
console.log(obj);
//=> {foo: {bar: {y: 'x'}}}
```


## API

### get(obj, path)

### set(obj, path, value)

### delete(obj, path)

#### obj

Type: `object`

Object to get, set, or delete the `path` value.

#### path

Type: `string`

Path of the property in the object. Use `/` for nested objects or `\\/` to add a `/` in a key.

#### value

Type: `any`

Value to set at `path`.


## License

MIT © [Ruby Rubenstahl] - based on dot-prop by [Sindre Sorhus](http://sindresorhus.com),
