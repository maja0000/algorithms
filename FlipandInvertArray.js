/// Input: [[1,1,0],[1,0,1],[0,0,0]]
/// Output: [[1,0,0],[0,1,0],[1,1,1]]

var flipAndInvertImage = function (arr) {
  let reversed = arr.map((each) =>
    each.map((elem) => (elem === 1 ? 0 : 1)).reverse()
  );

  return reversed;
};
