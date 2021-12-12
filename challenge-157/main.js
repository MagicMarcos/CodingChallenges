// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// Ex. Input: "aa", "bb" , "cc" => Output: "abcabc"
// Ex. Input: "qwe", "kcx" , "hwq" => Output: "qkhwcwexq"

// Note: You can expect all of the inputs to be the same length.

function letterGrouping(str1, str2, str3) {
  let groupedStr = '';
  for (let i = 0; i < str1.length; i++) {
    groupedStr += str1[i] + str2[i] + str3[i];
  }
  return groupedStr;
}

console.log(letterGrouping('aa', 'bb', 'cc'), 'abcabc');
console.log(letterGrouping('qwe', 'kcx', 'hwq'), 'qkhwcwexq');
