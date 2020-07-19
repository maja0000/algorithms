let arr = [
  [111, 1],
  [222, 2, 2],
  [3, 3, 3],
];
function flatten(arr) {
  // return arr.reduce((accu,array)=> accu.concat(array))
  // return [].concat.apply([],arr)
  return [].concat(...arr);
}
console.log(flatten(arr));
