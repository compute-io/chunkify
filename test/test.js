'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	chunkify = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-chunkify', function tests() {

	it( 'should export a function', function test() {
		expect( chunkify ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				chunkify( value, 1 );
			};
		}
	});

	it( 'should throw an error if not provided an integer chunk size greater than or equal to 0', function test() {
		var values = [
			'5',
			-5,
			null,
			undefined,
			NaN,
			true,
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				chunkify( [], value );
			};
		}
	});

	it( 'should throw an error if not provided options as an object', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				chunkify( [], 1, value );
			};
		}
	});

	it( 'should throw an error if not provided an integer starting index greater than or equal to 0 or provided an index >= the array length', function test() {
		var values = [
			'5',
			-5,
			10,
			null,
			undefined,
			NaN,
			true,
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				chunkify( [1,2,3], 1, {'start': value} );
			};
		}
	});

	it( 'should throw an error if provided a non-boolean `truncate` option', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				chunkify( [], 1, {'truncate': value} );
			};
		}
	});

	it( 'should throw an error if provided a non-boolean `padding` option', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				chunkify( [], 1, {'padding': value} );
			};
		}
	});

	it( 'should permit any padding value', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( paddingValue( values[i] ) ).to.not.throw( TypeError );
		}

		function paddingValue( value ) {
			return function() {
				chunkify( [], 1, {'padding_value': value} );
			};
		}
	});

	it( 'should throw an error if provided a non-integer `delay` option or a delay less than 0 or >= chunk size', function test() {
		var values = [
			'5',
			-5,
			5,
			null,
			undefined,
			NaN,
			true,
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				chunkify( [], 3, {'delay': value} );
			};
		}
	});

	it( 'should throw an error if provided a non-integer `overlap` option or an overlap >= the chunk size', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				chunkify( [], 3, {'overlap': value} );
			};
		}
	});

	it( 'should chunk an array' );

	it( 'should respect a starting index' );

	it( 'should truncate an ending chunk containing padding' );

	it( 'should turn off padding' );

	it( 'should allow arbitrary padding values' );

	it( 'should allow the first chunk to be padded' );

	it( 'should create overlapping chunks' );

	it( 'should create underlapping chunks' );

	it( 'should honor multiple chunk options' );

	it( 'should return an empty array if provided a chunk size equal to zero', function test() {
		var out = chunkify( [1,2,3], 0 );
		assert.strictEqual( out.length, 0 );
	});

});
