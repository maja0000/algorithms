// those 2 solutions wont work if in a string we have the same words -
// indexOf on the second one will look at the first appearance of the element
// and add less "a"s

let s = 'maja';

function repeatedString(s, n) {
  let letterAs = s.split('').filter((i) => i === 'a').length;
  console.log('letterAs', letterAs);

  letterAs =
    parseInt(n / s.length) * letterAs +
    s
      .slice(0, n % s.length)
      .split('')
      .filter((i) => i === 'a').length;

  return letterAs;
}
console.log(repeatedString(s, 10));

function repeatedString(s, n) {
  if (s.length === 1) return s === 'a' ? n : 0;
  let numLetter1 =
    s.split('').filter((letter) => letter === 'a').length *
    Math.floor(n / s.length);
  let slice = s.slice(0, n % s.length);
  if (slice.length === 1) return slice === 'a' ? numLetter1 + 1 : numLetter1;
  return numLetter1 + slice.split('').filter((letter) => letter === 'a').length;
}

// this works better
var toGoatLatin = function (S) {
  const arr = S.split(' ');
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < arr.length; i++) {
    if (vowels.indexOf(arr[i][0]) > -1) {
      console.log(arr[i][0]);
      arr[i] = arr[i] + 'ma';
    } else {
      arr[i] = arr[i].slice(1) + arr[i][0] + 'ma';
    }
    arr[i] += 'a'.repeat(i + 1);
  }
  return arr.join(' ');
};
console.log(toGoatLatin('A x gij T Ka Stsl UTK kqdc A'));
