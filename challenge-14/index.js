// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it.If the two numbers are equal return a or b.

//     Note: a and b are not ordered!


// integers are either pos or neg and are only integers (no letter or decimals)
function getSum(a, b) {
    //set up sum variable to return later
    let sum = 0

    // b can be more less or equal to a --> conditional to check this
    if (b > a) {
        // for loop iterates through all numbers between and including a and b 
        for (let i = a; i <= b; i++) {
            sum += i

        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i

        }
    } else {
        return b
        // when a = b we can return either (arbitrarily choose b)
    }

    //total sum value returned 
    return sum
    
}