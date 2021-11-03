// John is a worker, His job is to remove screws from a machine.

// There are 2 types of screws :

// slotted : '-'
// cross : '+'
// The input will be a string of screws, e.g. : "---+++"

// John has 2 screwdrivers, one for each type of screw.

// When John begins to work, he stands at the first screw, with a screwdriver in his hand (he is always holding a screwdriver that can screw out the first one), and another in his tool kit.

// He works from left to right, removing the screws. When necessary, he switches between the screwdriver in his hand and the one in his tool kit.

// Each action takes a set amount of time:

// remove one screw :               1 second
// move to the next screw:          1 second
// swap screwdrivers:               5 seconds
// Your task is to return the total time taken to remove all the screws, in seconds.

// Example:
// In order to be more clear, we use ABCDEF to represent the screws.
// The number in brackets is the time(seconds)

// Example1:
// screws=
// "---+++"
// "ABCDEF"

// remove A(1) + move to B and remove B(2) +
// move to C and remove C(2)+ move to D(1) +
// replace screwdriver(5) + remove D(1)+
// move to E and remove E(2) + move to F and remove F(2)

// total time = 16 seconds

// Therefore sc("---+++") == 16

// Example2:
// screws=
// "-+-+-+"
// "ABCDEF"

// remove A(1) +
// move to B(1) + replace screwdriver(5) + remove B(1)+
// move to C(1) + replace screwdriver(5) + remove C(1)+
// move to D(1) + replace screwdriver(5) + remove D(1)+
// move to E(1) + replace screwdriver(5) + remove E(1)+
// move to F(1) + replace screwdriver(5) + remove F(1)

// total time = 36 seconds

// Therefore sc("-+-+-+") == 36
function sc(screws) {
	let timeCount = 0;
	const res = [...screws].map((el, i, arr) => {
		if (el === arr[i + 1]) {
			timeCount += 2;
		} else {
			timeCount += 7;
		}
	});
	return timeCount - 6;
}
