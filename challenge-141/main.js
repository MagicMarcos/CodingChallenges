// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

var numJewelsInStones = function (jewels, stones) {
  const jewelStr = jewels + stones;
  let jewelObj = {};
  for (let jewel of jewelStr) {
    if (jewel in jewelObj) {
      jewelObj[jewel] += 1;
    } else {
      jewelObj[jewel] = 0;
    }
  }
  let jewelCount = 0;
  for (let jewel in jewelObj) {
    if (jewels.includes(jewel)) {
      jewelCount += jewelObj[jewel];
    }
  }
  return jewelCount;
};

//cool solution
var numJewelsInStones = function (jewels, stones) {
  return stones
    .split('')
    .reduce((acc, cur) => (jewels.includes(cur) ? acc + 1 : acc), 0);
};

//super cool
var numJewelsInStones = function (jewels, stones) {
  const map = {};
  let count = 0;

  for (let c of jewels) {
    map[c] = true;
  }

  for (let c of stones) {
    if (map[c]) {
      count++;
    }
  }
  return count;
};
