// let numbers = [2, 3, 4, 2];
// let desiredSum = 4;

// function twoNumsSum(numbers, sum) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === sum && j !== i) {
//         return [numbers[i], numbers[j]];
//       }
//     }
//   }
// }

// console.log(twoNumsSum(numbers, desiredSum));

function twoSum(nums, target) {
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededValue = target - currentNumber;

    if (previousValues.toString().indexOf(neededValue) == -1) {
      return [neededValue, nums[i]];
    } else {
      previousValues[currentNumber] = nums[i];
      // hash[key] = value
    }
  }
}

console.log(twoSum([2, 2, 4, 5], 4));
