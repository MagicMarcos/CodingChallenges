// Take a list of ages when each of your great - grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
//     Note: the result should be rounded down to the nearest integer.




function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    const ageArr = [age1, age2, age3, age4, age5, age6, age7, age8];

    return Math.floor(Math.sqrt(ageArr.reduce((a, b) => a + Math.pow(b, 2), 0)) / 2);
}