var expect = require('chai').expect;
var assert = require('assert')


/*
function fizzBuzz(val){
	if (val % 3 === 0 && val % 5 === 0){
		return "FizzBuzz"
	}
	if (val % 3 === 0){
		return "Fizz"
	}
	if (val % 5 === 0){
		return "Buzz"
	};
	return val.toString()
}



function checkFizzBuzz(testValue, expectedResult){
	let result = fizzBuzz(testValue)
	expect(result).to.equal(expectedResult)
}


describe('FizzBuzz Test Suite', function(){
	it('should return 1 when 1 is present', function(){
		checkFizzBuzz(1, '1');
		})
	it('should return Fizz when 3 or a multiple of 3 is present', function(){
		checkFizzBuzz(6, 'Fizz');
		})
	it('should return Buzz when 5 or a multiple of 5 is present', function(){
		checkFizzBuzz(10, 'Buzz');
	})
	it('should return FizzBuzz when the test value is a multiple of both 3 and 5', function(){
		checkFizzBuzz(45, 'FizzBuzz')
	})

});
*/



const adder = (a,b) => {
	return a + b
}


const testAdder = (testValue1, testValue2, expectedResult) => {
	let result = adder(testValue1, testValue2)
	expect(result).to.equal(expectedResult)
}

//Mocha segment only to be run via CLI - will not compile in IDE

before('Root Level Code Execution.', () => {
	console.log('*** EXECUTING Root-level before() hook - This will be run at the very root of the process, before everything else. *** \n')
})

describe('adder() Test Suite', () => {
	before('Run before testing', () => {
		console.log('Running pre-test code...')
	})
		beforeEach('Run this before each test', () => {
			console.log("beforeEach() - I'm going to execute this console.log() BEFORE each test runs.")
		})


			it('should return 3 when a and b are present', () => {
				testAdder(1,2,3);
			})
			it('should return 5 when 3 and 2 are added', () => {
				testAdder(3,2,5)
			})


		afterEach('Run after each test runs', () => {
			console.log("afterEach() - I'm going to execute this console.log() AFTER each test runs.")
		})
	after('Run after testing', () => {
		console.log('Running post-test code...')
	})

})










/* 3 laws of TDD

1.) Red Phase, create a failing test

*/