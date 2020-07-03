// if apears in second arr delete from the first

function seekAndDistroy(arr, ...rest) {
  return arr.filter((value) => !rest.includes(value));
}

console.log(seekAndDistroy([1, 2, 3, 'maja', 4], 2, 3, 4));

//  2 or more arrays return 1 array with unique elements in the order

function uniteUnique(...arrays) {
  const flatArray = [].concat(...arrays);
  console.log(flatArray);

  return [...new Set(flatArray)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
