//You have a bowl with 200 fish in it.Of these fish 99 % are not guppies.How many fish should you remove so that 2 % of what remains are guppies ?

//Iterate through an array of numbers and add two to each number.GO HARD PREP!

function arrAdd(array){
    // const newArr = []
    // for (let index = 0; index < array.length; index++) {
    //     newArr.push(array[index]+2)
        
    // }

    const newArr = array.map((i) => i+2)

    console.log(newArr)
}

arrAdd([4, 5, 6, 3, 2, 3])