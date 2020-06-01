let numbers = [2, 3, 4, 2];
let desiredSum = 4;

function twoNumsSum(numbers, sum) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === sum && j !== i) {
        return [numbers[i], numbers[j]];
      }
    }
  }
}

console.log(twoNumsSum(numbers, desiredSum));
