// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  const lowercaseText = text.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const textMap = {};
  let alphaPosition = 1;
  for (let letter of alphabet) {
    textMap[letter] = alphaPosition;
    alphaPosition++;
  }
  const textPositionArray = [];
  for (let letter of lowercaseText) {
    if (textMap[letter]) {
      textPositionArray.push(textMap[letter] + ' ');
    }
  }
  const result = textPositionArray.join('').trim();
  return result;
}

// tolowercase
// loop checking char code 97 -> 122
// create a map -> key = alpha pos.
// loop thru str -> check in map and store position in array + " "
// join and trim
