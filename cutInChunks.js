// cut into smaller arrays length num
let arr = [1, 1, 2, 2, 3, 3, 4, 4];

function cutArray(arr, num) {
  let cut = [];
  for (let i = 0; i < arr.length; i + num) {
    cut.push(arr.splice(i, i + num));
  }
  return cut;
}
console.log(cutArray(arr, 2));
