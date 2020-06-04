let array = [50, 60, 60, 45, 71];

function SumOddEven(array) {
  let oddSum = 0;
  let evenSum = 0;

  array.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

// function SumOddEven(array) {
//   let finalArray = [];

//   let evenNums = array
//     .filter((number) => number % 2 === 0)
//     .reduce((accu, num) => accu + num);
//   finalArray.push(evenNums);

//   let oddNums = array
//     .filter((number) => number % 2 !== 0)
//     .reduce((accu, num) => accu + num);
//   finalArray.push(oddNums);

//   return finalArray;
// }
// console.log(SumOddEven(array));
