// 'Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the compressed string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).',

function compress(str) {
  const strArr = str.split('');
  const count = {};
  strArr.forEach(el => {
    if (el in count) {
      count[el] += 1;
    } else {
      count[el] = 1;
    }
  });
  const countArr = Object.entries(count);
  if (
    countArr
      .flat()
      .filter(el => el !== el.toString())
      .every(el => el === 1)
  ) {
    return str;
  } else {
    return countArr.map(el => el.join('')).join('');
  }
}

console.log(compress('aabcccccaaa'));
console.log(compress('abcdefghijklmnop'));
console.log(compress('abcdefghijklmnoop'));
