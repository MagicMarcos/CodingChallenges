// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function arrayAlertConditional(array){
    const arrInit = array[0]
    const arrLast = array[array.length-1]

    if (arrInit === arrLast) {
        alert('we close in an hour')
    } else if (arrInit < arrLast) {
        alert('hi')
    } else {
        alert('bye')
    }
}

arrayAlertConditional([400,5,3,2,6,4,234234,54,400])
//if statement checking first and last array elements 

// use array methods to select the last element in the array 

// use bracket notation to select the first element in the array 