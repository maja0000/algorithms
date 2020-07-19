function fibonacci(x) {
  let arr = [0, 1];
  for (let i = 0; i < x; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr;
}
console.log(fibonacci(10));

// function fibonachi(num) {
//   let resultArray = [1, 1];

//   let firstNumber = 5;

//   let result = 13;

//   for (let i = 0; i <= num; i++) {
//     result += firstNumber;
//     resultArray.push(result);
//     firstNumber = result - firstNumber;
//   }
//   return resultArray;
// }
// console.log(fibonachi(10));

// [1, 1, 2, 3, 5, 13];

// function Fibonacci(Num) {
//   newArray = [1, 1];

//   for (let i = 0; i < Num; i++) {
//     let temporary = 2;

//     let firstNum = 3;

//     firstNum += temporary;
//     newArray.push(firstNum);
//     firstNum = firstNum - temporary;
//   }
// }
// Fibonacci(Num);

// newArray = [1, 1, 2, 3, 5];

// function Fibonacci() {
//   if (num <= 1) return 1;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// function fibonacci(x) {
//   let arr = [0, 1];
//   for (let i = 0; i < x; i++) {
//     arr.push(arr[i] + arr[i + 1]);
//     console.log(arr);
//   }
// }
// fibonacci(x);
