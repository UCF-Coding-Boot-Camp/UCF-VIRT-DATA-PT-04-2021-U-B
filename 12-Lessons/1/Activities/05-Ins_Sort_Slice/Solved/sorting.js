// Sort an array in ascending order
var numArray = [3, 2, 1]
numArray.sort()

console.log('Sorted numArray', numArray)

// Sort the array in descending order
var numArray2 = [1, 2, 3];
numArray2.sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (3, 2, 1)
  return secondNum - firstNum;
});

// Returns [3, 2, 1]
console.log('Descending sorted numArray2', numArray2);

// Sort the array in ascending order with a callback function
var numArray3 = [3, 2, 1];
numArray3.sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (1, 2, 3)
  return firstNum - secondNum;
});

console.log('Ascending sorted numArray3 with callback', numArray3);

// Sort the array in descending order, using an arrow function
var numArray4 = [1, 2, 3];
numArray4.sort((firstNum, secondNum) => secondNum - firstNum);
console.log('Sorted with Arrow Function', numArray4);

// Reverse the array
var numArray5 = [1, 2, 3];
var reversedArray = numArray5.reverse()
console.log('Reveresed Array', reversedArray);
