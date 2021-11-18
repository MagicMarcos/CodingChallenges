// find the missing vowel
// string has all vowels but one
//a -> 0
//e -> 1
//i-> 2
//o -> 3
//u -> 4
// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function findMissingVowelReturnIdx(str) {
  //object containing our vowels
  const vowels = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4,
  };
  // loop through vowel obj and check if string arr contains the vowel
  for (let el in vowels) {
    if (!str.includes(el)) {
      return vowels[el];
    }
  }
}

console.log(
  findMissingVowelReturnIdx('John Doe hs seven red pples under his bsket'),
  0
);
console.log(
  findMissingVowelReturnIdx(
    'Bb Smith sent us six neatly arranged range bicycles'
  ),
  3
);
