// For example, if the string  and , the substring we consider is ,
// the first  characters of her infinite string.
// There are 4 occurrences of a in the substring.

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
