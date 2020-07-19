// Given a square matrix, calculate the absolute difference between the sums of
//its diagonals.

function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[arr.length - 1 - i][i];
  }
  return Math.abs(firstDiagonal - secondDiagonal);
}
console.log();
