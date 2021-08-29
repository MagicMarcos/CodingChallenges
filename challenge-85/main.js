//given an array of items, reverse the order... without using the reverse the method

function revArr(arr) {
	for (let i = 0; i < arr.length / 2; i++) {
		//everything in here is in constant time -{O(4)}- reduces down to O(1)
		const temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
}

console.log(revArr([1, 2, 3, 4, 5, 6]));
