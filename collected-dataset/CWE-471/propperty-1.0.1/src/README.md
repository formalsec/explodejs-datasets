# propperty

Set and get values on objects via dot-notation strings.

## Example

```js
var deep = require('propperty');

var obj = {
  foo: {
    bar: 'baz',
    'bar.baz': 'qux'
  }
};

// Get
console.log(deep(obj, 'foo.bar'));
  // => "baz"

// Get with array
console.log(deep(obj, ['foo', 'bar.baz']));
  // => "qux"

// Set
deep(obj, 'foo.bar', 'hello');
console.log(obj.foo.bar);
  // => "hello"

// Set with array
deep(obj, ['foo', 'bar.baz'], 'goodbye');
console.log(obj.foo['bar.baz']);
  // => "goodbye"
```

## API

### deep(object, path[, value])

Where `path` is a dot-notation string `foo.bar` or an array of strings.

- If `value` is passed it will be set on the path.
- Set `deep.p = true` if you want non-existent paths to be initialized.
- If you want to unset (or delete), pass `undefined` as the `value`.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install propperty
```
