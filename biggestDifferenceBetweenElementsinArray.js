//biggest difference between elements in unsorted array
let numbers = [2, 3, 50, 6, 1, 9, 10];

function findLargestDiff(nums) {
  let sorted = nums.sort((a, b) => a - b);

  let previous = sorted[0];
  let reduced = sorted.reduce((biggestDifference, num) => {
    let diff = num - previous;
    previous = num;
    return Math.max(biggestDifference, diff);
  }, 0);

  return reduced;
}
console.log(findLargestDiff(numbers));

//   for (i = 1; i < sorted.length; i++) {
//     biggestDifference = Math.max(biggestDifference, sorted[i] - sorted[i - 1]);
//   }
