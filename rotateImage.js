// rotate image
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(matrix) {
  finalArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = matrix.map((each) => each[i]).reverse();
    finalArray.push(row);
  }
  return finalArray;
}
console.log(rotate(matrix));




