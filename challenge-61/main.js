// write function checkForInposterSyndrome() returns true if str contains 'not ready' or 'can't interview yet', otherwise false

function checkSpam(str) {
	let lowerCaseStr = str.toLowerCase();
	return (
		lowerCaseStr.include('not ready') ||
		lowerCaseStr.include("can't interview yet")
	);
}

console.log(checkSpam('I am not ready yet'), true);
console.log(checkSpan("I'm so fucking ready"), false);
