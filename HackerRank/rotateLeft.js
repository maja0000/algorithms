// rotate d times to the left array a

let d = 4;
let a = ['1', '2', '3', '4', '5', '6'];

function rotLeft(nums, rotations) {
  if (rotations > 0) {
    let cutOut = nums.splice(0, rotations);

    let final = nums.concat(cutOut);

    return final;
  }
}
console.log(rotLeft(a, d));
