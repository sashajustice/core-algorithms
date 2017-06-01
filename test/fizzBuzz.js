import chai, { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function() {
	
	it('should be a function', function() {
		expect(fizzBuzz).to.be.a('function')
	})

	it('returns buzz when the number is a multiple of 5', function() {
		var arr = fizzBuzz()

		expect(arr[4]).to.eql('Buzz')
	})

	it('returns fizz when the number is a multiple of 3', function() {
		var arr = fizzBuzz()

		expect(arr[2]).to.eql('Fizz')
	})

	it('returns fizzBuzz when the number is a multiple of 15', function() {
		var arr = fizzBuzz()

		expect(arr[14]).to.eql('FizzBuzz')
	})

})
