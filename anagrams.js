function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// // anagrams

// let word1 = 'majaanna';
// let word2 = 'jamannaa';

// function theSame(a, b) {
//   let name = word1.split('').sort().join('');
//   let lastName = word2.split('').sort().join('');
//   console.log(lastName);
//   console.log(name);
//   if (name == lastName) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(theSame(word1, word2));
