// group is 3 or more same letters, return start and end of group indexes

var largeGroupPositions = function (S) {
  const groups = [];
  let i = 0,
    j = 0;
  while (j < S.length) {
    if (S[i] !== S[j]) {
      if (j - i >= 3) groups.push([i, j - 1]);
      i = j;
    }
    j++;
  }
  if (j - i >= 3) groups.push([i, j - 1]);
  return groups;
};
console.log(largeGroupPositions('abcdddeeeeaabbbcd'));
