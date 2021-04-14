// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

//     Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
    const arr = Array.from(num.toString()).map(x => x % 2 != 0 && x >= 0 ? `-${x}-`
        : x).join('').split('')
    if (arr[0] === '-' && arr[arr.length - 1] === '-') {
        arr.shift()
        arr.pop()
    } else if (arr[0] === '-') {
        arr.shift()
    } else if (arr[arr.length - 1] === '-') {
        arr.pop()
    }

    const result = arr.filter((i, ix) => i === '-' ? arr[ix - 1] !== i : i)

    if (num < 0 && result.length === 2) {
        result.shift()
    }

    return result.join('')
}