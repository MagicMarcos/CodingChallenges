// A family of kookaburras are in my backyard.

// I can't see them all, but I can hear them!

// How many kookaburras are there?
// Hint
// The trick to counting kookaburras is to listen carefully

// The males go HaHaHa...

// The females go hahaha...

// And they always alternate male/female

var kookaCounter = function (laughing) {
	//   let counter = 0
	//   if(laughing == ""){
	//      counter
	//      } else if(!laughing.includes('H') || !laughing.includes('h') ){
	//     counter =1
	//   } else{
	//      laughing.split('a').forEach((el, i, arr)=> {
	//       if(el != '' && el != arr[i+1] ){
	//         counter++
	//       }
	//     })
	//   }
	//   return counter
	return laughing === ''
		? 0
		: laughing.split('a').reduce((a, c, idx, arr) => {
				if (c != arr[idx + 1]) {
					a++;
				}
				return a;
		  }, -1);
};
