// Given five positive integers, find the minimum and maximum values
// that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line
// of two space-separated long integers.

function miniMaxSum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  const newSorted = [...sorted];
  newSorted.pop();
  let minSum = newSorted.reduce((accu, num) => accu + num);

  sorted.shift();
  let maxSum = sorted.reduce((accu, num) => accu + num);

  console.log(minSum, maxSum);
}
