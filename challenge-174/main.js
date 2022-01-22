// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

function balance(left, right) {
  let leftWeight = 0;
  for (let letter of left) {
    if (letter === '!') {
      leftWeight += 2;
    } else {
      leftWeight += 3;
    }
  }
  let rightWeight = 0;
  for (let letter of right) {
    if (letter === '!') {
      rightWeight += 2;
    } else {
      rightWeight += 3;
    }
  }

  return leftWeight > rightWeight
    ? 'Left'
    : leftWeight < rightWeight
    ? 'Right'
    : 'Balance';
}
