let arr = [-1, 120, 180, -1, 130, -1];

function sortByHeight(arr) {
  let treeIndexes = [];
  let people = [];

  arr.map((val, idx) => {
    val === -1 ? treeIndexes.push(idx) : people.push(val);
  });
  let sorted = people.sort((a, b) => a - b);
  treeIndexes.forEach((val, idx) => sorted.splice(treeIndexes[idx], 0, -1));

  return sorted;
}
console.log(sortByHeight(arr));
