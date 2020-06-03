let str = ['code', 'doce', 'ecod', 'forme', 'forem'];

function IsAnagram(str) {
  let sorted = str.map((word) => word.split('').sort().join(''));

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1] || sorted[i] === sorted[i - 1]) {
      sorted.splice([i], 1);
    }
  }
  return sorted;
}
console.log(IsAnagram(str));
