//biggest difference between elements in unsorted array
let numbers = [2, 3, 50, 6, 1, 9, 10];

function findLargestDiff(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let biggestDifference = 0;

  for (i = 1; i < sorted.length; i++) {
    biggestDifference = Math.max(biggestDifference, sorted[i] - sorted[i - 1]);
  }
  //   for(let i =0;i<sorted.length;i++){
  //     if(sorted[i+1]-sorted[i] > biggestDifference){
  //       biggestDifference=sorted[i+1]-sorted[i]
  //     }
  return biggestDifference;
}
console.log(findLargestDiff(numbers));
