test = isPalindrome('abcdedcba');
test2 = isPalindrome('abcded');

console.log(test);
console.log(test2);

function isPalindrome(str) {
  var strReverse = str.split('').reverse().join(''); 
  if (strReverse === str) {
    return true;
  } else {
    return false;
  }
}
