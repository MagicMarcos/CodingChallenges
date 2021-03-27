//Write a program that finds the summation of every number from 1 to num.The number will always be a positive integer greater than 0.




const summation = (num) => {
    const sum = [];
    for (let i = 1; i <= num; i++) {
        sum.push(i)
    }
    return sum.reduce((a, b) => a + b, 0)
}