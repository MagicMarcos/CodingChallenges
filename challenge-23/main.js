// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

//     Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let result
    if (input == null || input.length == 0 || input == [] || input == undefined) {
        return result = []
    } else {
        const neg = input.filter(x => x < 0).reduce((a, b) => a + b)
        const pos = input.filter(x => x > 0).length
        result = [pos, neg]
        return result
    }

}