//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

const fakeBin = x => Array.from(x).map(i => i >= 5 ? i = 1 : i = 0).join('')