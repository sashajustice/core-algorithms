import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function() {
	
	it('should be a function', function() {
		expect(fibonacci).to.be.a('function')
	})

	it('returns true if the string is a palindrome', function() {
		expect(fibonacci(0)).to.eql(0);
	})

	it('returns true if the string is a palindrome', function() {
		expect(fibonacci(8)).to.eql(21);
	})

	it('returns true if the string is a palindrome', function() {
		expect(fibonacci(2)).to.eql(1);
	})
	
})