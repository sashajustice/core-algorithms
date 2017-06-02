function isPalindrome(string) {
  var palindrome = string.replace(/[^A-Za-z0-9_]/g,"").toLowerCase().split('')
  var bool;
  for(var i = 0; i < palindrome.length; i++) {
    if(palindrome[i] === palindrome[palindrome.length - 1 - i]) {
      bool = true;
    } else if(palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
      return false;
    }
  }
  return bool;
}

export default isPalindrome