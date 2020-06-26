// Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of
// elements which are in either of the two sets but not in both. For example,
// for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

const diff = (arr1, arr2) => [
  ...arr1.filter((e) => !arr2.includes(e)),
  ...arr2.filter((e) => !arr1.includes(e)),
];

const sym = (...args) => [...new Set(args.reduce(diff))];

sym([1, 2, 3], [5, 2, 1, 4]);

//function diffArray(arr1, arr2) {
//   let newArr =[]
//   let arr1unique = arr1.filter((e) => !arr2.includes(e))
//   let arr2unique = arr2.filter((e) => !arr1.includes(e))
// newArr.push(arr1unique,arr2unique)
//   let flat  = newArr.flat();

//   return flat;
// }
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
