// solution 1

// sum numbers (not in array)
const numToSeparate = 12345;
const arrayOfDigits = Array.from(String(numToSeparate), Number);
console.log(arrayOfDigits.reduce((accu, num) => accu + num));

// solution 2
function sumNumbers(...num) {
  return num.reduce((accu, num) => accu + num);
}
console.log(sumNumbers(1, 2, 3, 4, 5));
