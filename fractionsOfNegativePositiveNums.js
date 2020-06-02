// Given an array of integers, calculate the fractions of its elements that
// are positive, negative, and are zeros. Print the decimal value of each
// fraction on a new line. (ok to just console.log as strings not return )

let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let total = arr.length;
  let plus = 0;
  let minus = 0;
  let zero = 0;
  arr.map((each) => {
    each == 0 ? zero++ : each > 0 ? plus++ : minus++;
  });
  console.log((minus / total).toFixed(6));
  console.log((zero / total).toFixed(6));
  console.log((plus / total).toFixed(6));
}
console.log(plusMinus(arr));
