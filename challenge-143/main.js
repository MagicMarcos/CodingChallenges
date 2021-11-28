// 'Implement an algorithm to determine if a string has all unique characters.',
function uniqueStr(str) {
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(uniqueStr('abc'));
console.log(uniqueStr('abbbc'));
