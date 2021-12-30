// Create a function called shortcut to remove all the lowercase vowels in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// Don't worry about uppercase vowels.

function shortcut(string) {
  let res = [];
  let vowel = 'aeiou';
  for (let letter of string) {
    if (!vowel.includes(letter)) {
      res.push(letter);
    }
  }

  return res.join('');
}
