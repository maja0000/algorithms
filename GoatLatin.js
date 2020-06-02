let str = 'Each word consists of lowercase and uppercase letters only';

function toGoatLatin(str) {
  let splitWords = str.split(' ');

  let addMa = splitWords.map((each) =>
    ['a', 'e', 'i', 'o', 'u'].indexOf(each[0].toLowerCase()) !== -1
      ? each.concat('ma')
      : each.substring(1) + each[0] + 'ma'
  );
  let addAs = addMa.map((each) => each + 'a'.repeat(addMa.indexOf(each) + 1));
  console.log(addAs);

  return addAs.join(' ');
}
console.log(toGoatLatin(str));

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.

// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".

// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
