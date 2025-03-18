# golang-cover-parse

Parse Go cover results file to JavaScript Object

The output is based on, and intended to be compatible with, https://github.com/davglass/lcov-parse

Also see:
- [cobertura-parse](https://www.npmjs.com/package/cobertura-parse)
- [jacoco-parse](https://www.npmjs.com/package/jacoco-parse)

## Use

```js
var gocov = require( "golang-cover-parse" );

// parse by file path
gocov.parseFile( "filepath.out", function( err, result ) { ... } );

// or parse file contents
gocov.parseContent( "...",
    function( err, result ) { ... } );
```
