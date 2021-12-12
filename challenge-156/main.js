// Create a function that alternates the case of a given string.
// Ex. HeLLo WoRLd => hEllO wOrlD.

function alternateCasing(str) {
  let altStr = '';
  for (let letter of str) {
    if (letter.toUpperCase() === letter) {
      altStr += letter.toLowerCase();
    } else {
      altStr += letter.toUpperCase();
    }
  }
  return altStr;
}

console.log(alternateCasing('HeLLo WoRLd'), 'hEllO wOrlD');
