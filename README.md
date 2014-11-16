Chunkify
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Segments an array into chunks.


## Installation

``` bash
$ npm install compute-chunkify
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var chunkify = require( 'compute-chunkify' );
```

#### chunkify( arr, n[, opts] )

Segments an `array` into chunks of length `n`.

``` javascript
var data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var out = chunkify( data, 3 );
// returns [ [1,2,3], [4,5,6], [7,8,9], [10,null,null] ]
```

The function is configurable and has the following options...


##### padding

By default, if the `array` length is not evenly divisible by `n`, the last chunk is padded with `null` values. To turn off padding,

``` javascript
var opts = {
	'padding': false
};

var out = chunkify( data, 3, opts );
// returns [ [1,2,3], [4,5,6], [7,8,9], [10] ]
```

To pad with a value other than `null`,

``` javascript
var opts = {
	'padding_value': 0
};

var out = chunkify( data, 3, opts );
// returns [ [1,2,3], [4,5,6], [7,8,9], [10,0,0] ]
```


##### overlap ( 0 < k < n )

By default, the array is segmented into adjacent chunks (no overlap). To specify a chunk overlap `k` where `0 < k < n`,

``` javascript
var opts = {
	'overlap': 2,
	'padding_value': 0
};

var out = chunkify( data, 3, opts );
/* returns 
	[
		[1,2,3],
		[2,3,4],
		[3,4,5],
		[4,5,6],
		[5,6,7],
		[6,7,8],
		[7,8,9],
		[8,9,10],
		[9,10,0],
		[10,0,0]
	]
*/
```

By default, an `array` is chunked beginning with the first `array` element. You may want to


##### underlap ( k < 0 )

Note, by default, `k = 0`. To specify a chunk underlap (`k < 0 `),

``` javascript
var opts = {
	'overlap': -5,
	'padding_value': 0
};

var out = chunkify( data, 3, opts );
/* returns 
	[
		[1,2,3],
		[9,10,0]
	]
*/
```

  




## Examples

``` javascript
var chunkify = require( 'compute-chunkify' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-chunkify.svg
[npm-url]: https://npmjs.org/package/compute-chunkify

[travis-image]: http://img.shields.io/travis/compute-io/chunkify/master.svg
[travis-url]: https://travis-ci.org/compute-io/chunkify

[coveralls-image]: https://img.shields.io/coveralls/compute-io/chunkify/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/chunkify?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/chunkify.svg
[dependencies-url]: https://david-dm.org/compute-io/chunkify

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/chunkify.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/chunkify

[github-issues-image]: http://img.shields.io/github/issues/compute-io/chunkify.svg
[github-issues-url]: https://github.com/compute-io/chunkify/issues
