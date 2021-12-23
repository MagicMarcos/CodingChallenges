// Linked Lists - Get Nth

// Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on. So for the list 42 -> 13 -> 666, GetNth() with index 1 should return Node(13);

// getNth(1 -> 2 -> 3 -> null, 0).data === 1
// getNth(1 -> 2 -> 3 -> null, 1).data === 2
// The index should be in the range [0..length-1]. If it is not, GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP). You should also raise an exception (ArgumentException in C#, InvalidArgumentException in PHP) if the list is empty/null/None.

// !starting code
// function Node(data) {
//   this.data = data;
//   this.next = null;
// }

// function getNth(node, index) {

// }

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (!node) throw new Error('invalid argument at ' + index);
  // we use the index as a counter
  if (index === 0) {
    //     if x == 0 then we return our node... the test example checks for node.data to get the value we need
    return node;
  } else {
    //     runs the function again with the next node in our linked list and subtracts the index (our counter) by one
    return getNth(node.next, index - 1);
  }
}

// function Node(data) {
//   this.data = data;
//   this.next = null;
// }

// function getNth(node, index) {
//   if (!node) throw new Error('Invalid node at ' + index);

//   return (index === 0) ? node : getNth(node.next, index - 1);
// }
