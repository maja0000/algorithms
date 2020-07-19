// find unique elemets from x number of  arrays
function sym(...args) {
  let merged = [].concat.apply([], args);
  let unique = Array.from(new Set(merged)).sort((a, b) => a - b);
  return unique;
}

sym([1, 2, 3], [5, 2, 1, 4]);

console.log(sym([1, 2, 3], [5, 2, 1, 4], [2, 9, 9]));

// NEW SET
// var deleteDuplicates = function(head) {
//   let unique = new Set(head)
//   return [...unique]
// };
// console.log(deleteDuplicates([1,1,2]))

// find a non unique characters  in an array

// function nonUniqueElements(data) {
//   return data.filter(function (a) {
//     return data.indexOf(a) !== data.lastIndexOf(a);
//   });
// }
// console.log(nonUniqueElements([1, 2, 1, 3, 4]));

// DELETE DUPLICATE

// let removeDuplicates = function(nums) {
//   let sorted = nums.sort((a,b)=>a-b)
//   for(let i = 0;i<nums.length;i++){
//     nums[i]===nums[i+1] ? nums.splice(nums[i+1],1):""
//   }
// return nums
// }
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// V COOL

// function removeDuplicates(nums){
//   return nums.filter((val, index) =>
//    val !== nums[index - 1]);

// }
//  console.log(removeDuplicates([1,1,2]))
