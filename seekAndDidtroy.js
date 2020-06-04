// if apears in second arr delete from the first

function seekAndDistroy(arr, ...rest) {
  return arr.filter((value) => !rest.includes(value));
}

console.log(seekAndDistroy([1, 2, 3, 'maja', 4], 2, 3, 4));
