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
/* returns
	[
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[10,null,null]
	]
*/
```

The function is configurable and has the following options...


##### _start_

`Integer` specifying the index from which to begin chunking. Default: `0`.

``` javascript
var opts = {
	'start': 2
};

var out = chunkify( data, 3, opts );
/* returns
	[
		[2,3,4],
		[5,6,7],
		[8,9,10]
	]
*/
```


##### _truncate_

`Boolean` specifying whether the last chunk must contain only `array` values and no padded values. Default: `false`.

``` javascript
var opts = {
	'truncate': true
};

var out = chunkify( data, 3, opts );
/* returns
	[
		[1,2,3],
		[4,5,6],
		[7,8,9]
	]
*/
```

##### _padding_

By default, if the `array` length is not evenly divisible by `n`, the last chunk is padded with `null` values. Default: `true`.

To turn off padding, set this option to `false`.

``` javascript
var opts = {
	'padding': false
};

var out = chunkify( data, 3, opts );
/* returns
	[
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[10]
	]
*/
```

##### _padding_value_

The default padding value is `null`. Set this option to pad with a value other than `null`.

``` javascript
var opts = {
	'padding_value': 0
};

var out = chunkify( data, 3, opts );
/* returns
	[
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[10,0,0]
	]
*/
```

##### _delay_

By default, an `array` is chunked beginning with the first `array` element. Default: `0`.

Set this option to pad the first chunk, where `0 < delay < n`.

``` javascript
var opts = {
	'delay': 2
};

var out = chunkify( data, 3, opts );
/* returns 
	[
		[null,null,1],
		[2,3,4],
		[5,6,7],
		[8,9,10]
	]
*/
```

##### _overlap_

By default, the array is segmented into adjacent chunks (no overlap and no underlap). Default: `0`.

To create overlapping chunks, set the overlap option such that `0 < overlap < n`,

``` javascript
var opts = {
	'overlap': 2
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
		[9,10,null]
	]
*/
```

To create non-adjacent chunks (underlap), set the overlap such that `overlap < 0 `, where `|overlap|` corresponds to the number of elements to skip between new chunks.

``` javascript
var opts = {
	'overlap': -4
};

var out = chunkify( data, 3, opts );
/* returns 
	[
		[1,2,3],
		[8,9,10]
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

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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
