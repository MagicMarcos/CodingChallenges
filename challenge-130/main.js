// Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.

// There are 64 squares on a chessboard.

// #Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

// Write a program that shows how many grains were on each square.

function square(number) {
  //your code here 8x8 64 quadrados Example: square(1) = 1
  // square(2) = 2 square(3) = 4 square(4) = 8 square(5) = 16
  //      1+1 = 2 / 2 + 2 = 4  /  4 + 4 = 8
  let num = 1;
  for (let i = 2; i <= number; i++) {
    num = num * 2; // 0 + 1 = 1 / 1 + 2 = 3
  }
  return num;
}

const square = n => 2 ** (n - 1);
