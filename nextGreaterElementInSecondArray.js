let arr1 = [4, 1, 2];
let arr2 = [1, 3, 4, 2];

let nextGreaterElement = function (nums1, nums2) {
  // get the indexes of numbers from 1st array in the second
  return nums1.map((e) => {
    let found = nums2.indexOf(e);
    console.log('found', found);

    //set a new array with just the numbers to the end of array
    let rest = nums2.slice(found + 1);
    console.log('rest', rest);

    let greater = rest.find((number) => number > e);
    return greater || -1;
  });
};
console.log(nextGreaterElement(arr1, arr2));
