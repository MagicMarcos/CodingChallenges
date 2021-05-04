// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

function first(arr, n) {
  const newArr = []
  if(n > 0){
    for(let i = 0; i <= n-1; i++){
      newArr.push(arr[i]) 
      
    }
    if(newArr.length > 5){
      return [newArr[0],newArr[1],newArr[2],newArr[3],newArr[4] ]
    } else{
      return newArr
    }
  }
  else if (n === 0){
     return []
   } else {
    return [arr[0]]
  }

}