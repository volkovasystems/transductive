"use strict"

const util = require( "util" );

const Transductive = require( "./transductive.module.js" );

console
.log(
	util
	.inspect(
		Transductive(
			[
				"orange",
				"apple",
				"lemon",
				"straberry"
			]
		)
		.reduce(
			function( accumulator, value, key, source ){
				accumulator[ value ] = key;

				return	accumulator;
			},
			{ }
		)
		.reduce(
			function( accumulator, value, key ){
				return	(
							[
								accumulator,
								(
									[
										key,
										value
									]
									.join( "," )
								)
							]
							.filter(
								( token ) => (
										typeof
										token
									==	"string"
								)
							)
							.join( "\n" )
						);
			}
		)
		.valueOf( )
	)
);
