// Please create a function that takes in a number and a word.If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!

function alertWinner(str, num){
    if (str.length * num > 100) {
        alert('Winner!')
    } else{
        alert('try again')
    }
};

alertWinner('marcos', 55)