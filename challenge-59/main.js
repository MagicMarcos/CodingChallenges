// remember that strings can be accessed by their index
// Remember that unlike arrays strings are immutable
// cant update the index but you can access it

// str[0] and charAt(0) are the same thing

// function returns the cap of a name. No Arrays
//leon -> Leon
// bob -> Bob
// andy -> Andy

function capitalizeStr(str) {
	// we are returning a new string and not modifying the og string
	return str[0].toUpperCase() + str.slice(1);
}
