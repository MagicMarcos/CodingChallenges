// Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) i.e **arr** once it has been sorted. The returned value should be a number.

function whereIBelong(arr, num) {
	let counter = 0;
	for (i = 0; i < arr.length; i++) {
		if (num > arr[i]) {
			counter++;
		}
	}
	return counter;
}
