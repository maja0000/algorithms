// Given the array nums consisting of 2n elements in the form
// [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function (nums, n) {
  var newArr = [];

  for (let index = 0; index < n; index++) {
    newArr.push(nums[index], nums[index + n]);
  }

  return newArr;
};
console.log(shuffle([1, 2, 3, 4, 5, 6], 3));
