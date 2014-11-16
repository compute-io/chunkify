/**
*
*	COMPUTE: chunkify
*
*
*	DESCRIPTION:
*		- Segments an array into chunks.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isInteger = require( 'validate.io-integer' );


// FUNCTIONS //

/**
* FUNCTION: validate( arr, n, opts )
*	Validates `chunkify` arguments.
*
* @param {Array} arr - input array
* @param {Number} n - chunk size
* @param {Object} opts - options object
*/
function validate( arr, n, opts ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'chunkify()::invalid input argument. Must provide an array.' );
	}
	if ( !isInteger( n ) || n < 0 ) {
		throw new TypeError( 'chunkify()::invalid input argument. Chunk size must be a positive integer.' );
	}
	if ( !isObject( opts ) ) {
		throw new TypeError( 'chunkify()::invalid input argument. Options must be an object.' );
	}
	if ( opts.hasOwnProperty( 'start' ) ) {
		if ( !isInteger( opts.start ) || opts.start < 0 || opts.start >= n ) {
			throw new TypeError( 'chunkify()::invalid option. Start index must be an integer greater than or equal to 0 and less than the input array length.' );
		}
	} else {
		opts.start = 0;
	}
	if ( opts.hasOwnProperty( 'truncate' ) ) {
		if ( typeof opts.truncate !== 'boolean' ) {
			throw new TypeError( 'chunkify()::invalid option. Truncation option must be a boolean.' );
		}
	} else {
		opts.truncate = false;
	}
	if ( opts.hasOwnProperty( 'padding' ) ) {
		if ( typeof opts.padding !== 'boolean' ) {
			throw new TypeError( 'chunkify()::invalid option. Padding option must be a boolean.' );
		}
	} else {
		opts.padding = true;
	}
	if ( !opts.hasOwnProperty( 'padding_value' ) ) {
		opts.padding_value = null;
	}
	if ( opts.hasOwnProperty( 'delay' ) ) {
		if ( !isInteger( opts.delay ) || opts.delay < 0 || opts.delay >= n ) {
			throw new TypeError( 'chunkify()::invalid option. Delay must be an integer greater than or equal to 0 and less than the input array length.' );
		}
	} else {
		opts.delay = 0;
	}
	if ( opts.hasOwnProperty( 'overlap' ) ) {
		if ( !isInteger( opts.overlap ) || opts.overlap >= n ) {
			throw new TypeError( 'chunkify()::invalid option. Overlap must be an integer less than the input array length.' );
		}
	} else {
		opts.overlap = 0;
	}
} // end FUNCTION validate()


// CHUNKIFY //

/**
* FUNCTION: chunkify( arr, n[, opts] )
*	Segments an array into chunks.
*
* @param {Array} arr - array to be chunked
* @param {Number} n - chunk size
* @param {Object} [opts] - function options
* @param {Number} [opts.start] - array index from which to begin chunking (default: 0)
* @param {Boolean} [opts.truncate] - indicates whether last chunk should be truncated if it contains padded values (default: false)
* @param {Boolean} [opts.padding] - indicates whether chunks should be allowed to contain padded values (default: true)
* @param {*} [opts.padding_value] - value used for padding (default: null)
* @param {Number} [opts.delay] - integer specifying the number of padded values to add to the first chunk (default: 0)
* @param {Number} [opts.overlap] - integer specifying extent of chunk overlap/underlap (default: 0)
* @returns {Array} array of chunks
*/
function chunkify( arr, n, opts ) {
	if ( arguments.length < 3 ) {
		opts = {};
	}
	validate( arr, n, opts );
	if ( n === 0 ) {
		return [];
	}
} // end FUNCTION chunkify()


// EXPORTS //

module.exports = chunkify;
