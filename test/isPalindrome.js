import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function() {
	
	it('should be a function', function() {
		expect(isPalindrome).to.be.a('function')
	})

	it('returns true if the string is a palindrome', function() {
		expect(isPalindrome('radar')).to.be.true;
	})

	it('returns false if the string is a palindrome', function() {
		expect(isPalindrome('bananas')).to.be.false;
	})

	it('returns true if multiple words are a palindrome', function() {
		expect(isPalindrome('A man, a plan, a canal: Panama')).to.be.true
	})
	
})