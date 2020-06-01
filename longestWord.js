let str = 'Maja, went to the bank in, the afternoon afterno,on';

function longestWord(str) {
  let replaced = str.replace(/[,@^*>.]/g, '');
  let splitStr = replaced.split(' ');

  splitStr.sort((a, b) => b.length - a.length);

  // if more than 1 word with same num of letters, return array if just 1 return word
  const longestWords = splitStr.filter(
    (word) => word.length === splitStr[0].length
  );
  if (longestWords.length === 1) {
    return splitStr[0];
  } else {
    return longestWords;
  }
}
console.log(longestWord(str));

// let str = 'Maja, went to the bank in, the afterno,on';

// function longestWord(str) {
//   let biggestNum = 0;
//   let longestword = '';

//   let replaced = str.replace(/[,@^*>.]/g, '');
//   let splitStr = replaced.split(' ');

//   for (let i = 0; i < splitStr.length; i++) {
//     if (splitStr[i].length > biggestNum) {
//       biggestNum = splitStr[i].length;
//       longestword = splitStr[i];
//     }
//   }
//   return longestword;
// }
// console.log(longestWord(str));
