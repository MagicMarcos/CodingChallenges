//take in a number and return it's digits in an array in reversed order



function digitize(n) {

    const nStrArr = n.toString().split('').reverse()


    let finalStr = []
    for (let i = 0; i < nStrArr.length; i++) {
        finalStr.push(Number(nStrArr[i]))
    }
    return finalStr
}