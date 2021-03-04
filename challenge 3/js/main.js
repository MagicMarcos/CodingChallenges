// Please create a function that takes in an array.The function should console.log() 
// the sum of the first value in the array and the last value in the array



let coolNums = [3, 5, 6, 7, 3, 4, 5, 7, 4];
let num1 = coolNums[0]
let num2 = coolNums[coolNums.length - 1];

document.querySelector('h1').addEventListener('click', arrMaf)  

function arrMaf(){
    console.log(num1 + num2);
}

