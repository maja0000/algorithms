// find number of the tallest candles

let arr = [3, 90, 0, 9, 3, 4, 90];

function candles(arr) {
  if (arr.length > 1) {
    let sorted = arr.sort((a, b) => b - a);

    let filtered = sorted.filter((each) => each === sorted[0]);

    return filtered.length;
  } else return 1;
}
console.log(candles(arr));
