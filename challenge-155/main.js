// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeFirstAndLastLetters(str) {
  // return str.slice(1 , str.length-1)

  let trimmedStr = '';
  for (let i = 1; i < str.length - 1; i++) {
    trimmedStr += str[i];
  }
  return trimmedStr;
}

console.log(removeFirstAndLastLetters('marcos'), 'arco');
console.log(removeFirstAndLastLetters('bagheera'), 'agheer');
