"use strict";

/*;
	@module-license:
		MIT License

		Copyright (c) 2020 Richeve S. Bebedor <richeve.bebedor@gmail.com>
		@copyright: Richeve S. Bebedor <@year: 2020> <@contact: richeve.bebedor@gmail.com>

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license
*/

const INTEGER_PATTERN = (
	/^\d+?$/
);

const Transductive = (
	function Transductive( entity ){
		/*;
			@parameter-definition:
				{
					"namespace": "[
						@type:
								object
							|	object as Array
							|	function
							|	string
							|	number
							|	boolean
							|	undefined

							<
								@required
							>
					]"
				}
			@end-parameter-definition

			@result-definition:
				{
					"result": "[@type: object as Transductive]"
				}
			@end-result-definition

			@trigger-definition:
				{
					"trigger": "[@type: object as Error <@throwable>]"
				}
			@end-trigger-definition
		*/

		if(
				(
								this
					instanceof  Transductive
				)
			=== true
		){
			if(
					arguments
					.length
				=== 1
			){
				if(
						(
								typeof
								entity
							==  "object"
						)

					&&  (
								entity
							!== null
						)

					&&  (
								Array
								.isArray(
									entity
								)
							===	true
						)
				){
					Object
					.defineProperty(
						this,

						"$entity",

						{
							"value": (
								(
									new	WeakMap( )
								)
								.set(
									this,
									(
										Array
										.from(
											entity
										)
									)
								)
							),

							"configurable": false,
							"enumerable": false,
							"writable": false
						}
					);

					Object
					.defineProperty(
						this,

						"$indexList",

						{
							"value": (
								(
									new	WeakMap( )
								)
								.set(
									this,
									(
										Object
										.keys(
											entity
										)
									)
								)
							),

							"configurable": false,
							"enumerable": false,
							"writable": false
						}
					);

					Object
					.defineProperty(
						this,

						"$keyList",

						{
							"value": (
								(
									new	WeakMap( )
								)
								.set(
									this,
									(
										Array
										.from(
											this
											.$indexList
										)
									)
								)
							),

							"configurable": false,
							"enumerable": false,
							"writable": false
						}
					);
				}
				else if(
						(
								typeof
								entity
							==  "object"
						)

					&&  (
								entity
							!== null
						)
				){
					Object
					.defineProperty(
						this,

						"$entity",

						{
							"value": (
								(
									new	WeakMap( )
								)
								.set(
									this,
									(
										Object
										.assign(
											{ },
											entity
										)
									)
								)
							),

							"configurable": false,
							"enumerable": false,
							"writable": true
						}
					);

					Object
					.defineProperty(
						this,

						"$keyList",

						{
							"value": (
								(
									new	WeakMap( )
								)
								.set(
									this,
									(
										Object
										.keys(
											this
											.$entity
										)
									)
								)
							),

							"configurable": false,
							"enumerable": false,
							"writable": false
						}
					);

					Object
					.defineProperty(
						this,

						"$indexList",

						{
							"value": (
								(
									new	WeakMap( )
								)
								.set(
									this,
									(
										Object
										.keys(
											this
											.$keyList
										)
									)
								)
							),

							"configurable": false,
							"enumerable": false,
							"writable": false
						}
					);
				}
				else if(
						typeof
						entity
					==  "undefined"
				){

				}
				else if(
						(
								typeof
								entity
							==	"string"
						)

					&&	(
								typeof
								entity
							==	"number"
						)

					&&	(
								typeof
								entity
							==	"boolean"
						)

					&&	(
								typeof
								entity
							==	"symbol"
						)
				){
					Object
					.defineProperty(
						this,

						"$entity",

						{
							"value": (
								(
									new	WeakMap( )
								)
								.set(
									this,
									entity
								)
							),

							"configurable": false,
							"enumerable": false,
							"writable": false
						}
					);
				}
				else{
					throw   (
								new Error(
										[
											"cannot instantiate class",

											"cannot apply entity reduction",
											"cannot support entity",

											`@class: ${ this.constructor };`,
											`@entity: ${ entity };`
										]
									)
							);
				}
			}
			else if(
					(
							arguments
							.length
						=== 0
					)

				||  (
							typeof
							entity
						==  "undefined"
					)
			){

			}
			else{
				throw   (
							new Error(
									[
										"cannot instantiate class",

										"cannot apply reduction",
										"cannot support parameter",

										`@class: ${ this.constructor };`,
										`@arguments: ${ arguments };`
									]
								)
						);
			}
		}
		else{
			if(
					arguments
					.length
				=== 1
			){
				if(
						(
								typeof
								entity
							==  "function"
						)

					&&  (
								typeof
								entity
								.name
							==  "string"
						)

					&&  (
								entity
								.name
								.length
							>   0
						)

					&&  (
								(
									/^[A-Z]/
								)
								.test(
									entity
									.name
								)
							=== true
						)
				){
						entity
						.prototype
						.reduce
					=   (
							Transductive
							.prototype
							.reduce
						);

					return  entity;
				}
				else{
					return  (
								new Transductive(
										entity
									)
							);
				}
			}
			else if(
					(
							arguments
							.length
						=== 0
					)

				||  (
							typeof
							entity
						==  "undefined"
					)
			){
				return  Transductive( );
			}
			else{
				throw   (
							new Error(
									[
										"cannot execute procedure",

										"cannot apply reduction",
										"cannot support parameter",

										`@arguments: ${ arguments };`
									]
								)
						);
			}
		}
	}
);

Transductive.prototype[ Symbol.iterator ] = (
	function iterator( ){
		return	this;
	}
);

Transductive.prototype.next = (
	function next( ){
		if(
				this
				.done
			=== true
		){
			Object
			.keys(
				this
				.$keyList
				.get(
					this
				)
			)
			.forEach(
				( index ) => (
					this
					.$indexList
					.get(
						this
					)
					.push(
						index
					)
				)
			);
		}

			this
			.index
		=	(
				this
				.$indexList
				.get(
					this
				)
				.splice(
					0,
					1
				)
			);

		if(
				Array
				.isArray(
					this
					.$entity
					.get(
						this
					)
				)
			!==	true
		){
				this
				.key
			=	(
					this
					.$keyList
					.get(
						this
					)[
						this
						.index
					]
				);
		}
		else{
				this
				.key
			=	(
					this
					.index
				);
		}

			this
			.value
		=	(
				this
				.$entity
				.get(
					this
				)[
					this
					.key
				]
			);

			this
			.done
		=	(
					(
						this
						.$indexList
						.get(
							this
						)
						.length
					)
				<=	0
			);

		return	this;
	}
);

Transductive.prototype.$flush = (
	function flush( ){
		const $indexList = (
			this
			.$indexList
			.get(
				this
			)
		);

		while(
				$indexList
				.length
			>	0
		){
			$indexList
			.pop( );
		}

		const $keyList = (
			this
			.$keyList
			.get(
				this
			)
		);

		while(
				$keyList
				.length
			>	0
		){
			$keyList
			.pop( );
		}

		return  this;
	}
);

Transductive.prototype.reduce = (
	function reduce( reducer, accumulator ){
		if(
				typeof
				reducer
			!= "function"
		){
			throw   (
						new Error(
								[
									"cannot proceed reduce procedure",
									"invalid reducer procedure parameter",

									`@reducer: ${ reducer };`
								]
							)
					);
		}

		if(
				(
						arguments
						.length
					=== 1
				)

			&&  (
						typeof
						accumulator
					==  "undefined"
				)
		){
			if(
					typeof
					(
						this
						.$entity
						.get(
							this
						)
					)
				!= "undefined"
			){
				/*;
					@todo-note:
						Do not transfer original reference.
						Apply instance check if array or object then do copy.
					@end-todo-note
				*/
					accumulator
				=	(
						this
						.$entity
						.get(
							this
						)
					);
			}
			else{
				throw   (
							new Error(
									[
										"cannot proceed reduce procedure",
										"cannot determine accumulator",

										`@arguments: ${ arguments };`
									]
								)
						);
			}
		}
		else if(
				(
						arguments
						.length
					!== 2
				)

			||  (
						typeof
						accumulator
					==  "undefined"
				)
		){
			throw   (
						new Error(
								[
									"cannot proceed reduce procedure",
									"invalid reduce parameter list",

									`@arguments: ${ arguments };`
								]
							)
					);
		}

		const $entity = (
			this
			.$entity
			.get(
				this
			)
		);

		try{
			for(
					const item
				of	this
			){
				const key = (
						(
								INTEGER_PATTERN
								.test(
									this
									.key
								)
							===	true
						)
					?	parseInt(
							this
							.key
						)
					:	(
							this
							.key
						)
				);

					accumulator
				=	(
						reducer(
							accumulator,

							item,

							key,

							$entity
						)
					);
			}
		}
		catch(
			error
		){

		}

		return  this;
	}
);

Transductive.prototype.valueOf = (
	function valueOf( ){
	}
);

Transductive.prototype.toString = (
	function toString( ){
	}
);
