// find a non unique characters  in an array

function nonUniqueElements(data) {
  return data.filter(function (a) {
    return data.indexOf(a) !== data.lastIndexOf(a);
  });
}
console.log(nonUniqueElements([1, 2, 1, 3, 4]));

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
