let string = 'majawenttosleep';

function MostUsedLetter(str) {
  let charMap = {};
  let biggestNum = 0;
  let biggestLetter = '';

  str.split('').forEach((letter) => {
    if (charMap[letter]) {
      charMap[letter]++;
    } else {
      charMap[letter] = 1;
    }
    for (let char in charMap) {
      if (charMap[char] > biggestNum) {
        biggestNum = charMap[char];
        biggestLetter = char;
      }
    }
  });
  return biggestLetter;
}
console.log(MostUsedLetter(string));
