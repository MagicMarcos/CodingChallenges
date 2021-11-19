// if letter in str repeats -> letter = ')'
// if letter in str !repeat -> letter = '('

// always a string -> case sensitive
// ')('

// ("din"),"(((")
// ("recede"),"()()()")
// ("(( @"),"))((")

// str -> to array
// map thru change el if condition || declare an empty arr (orstr) that we push to
// if letter in str repeats -> letter = ')' => str.Index() !== strnlastIndexOf()
// if letter in str !repeat -> letter = '('
// return map || return the new arr -> JOIN('')
function duplicateEncode(word) {
  const lowerWord = word.toLowerCase();
  //   const strArr = [...lowerWord]
  //   const newStrArr = strArr.map((letter, i , arr) => {
  //     if(arr.indexOf(letter) !== arr.lastIndexOf(letter)){
  //       return letter = ')'
  //     } else {
  //       return letter = '('
  //     }
  //   })
  //   const resultStr = newStrArr.join('')

  let resultStr = '';
  for (let letter of lowerWord) {
    if (lowerWord.indexOf(letter) !== lowerWord.lastIndexOf(letter)) {
      resultStr = resultStr + ')';
    } else {
      resultStr = resultStr + '(';
    }
  }
  return resultStr;
}

// console.log(duplicateEncode("din"),"(((")
// console.log(duplicateEncode("recede"),"()()()")
// console.log(duplicateEncode("(( @"),"))((" )
