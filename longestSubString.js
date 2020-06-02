let words = ['able', 'ale', 'bale', 'xyx', 'apple'];
let string = 'abppplee';

const longestSubSequence = (words, s) => {
  const isSubSequence = (s, word) => {
    // 'abc' => 'a.*b.*c'
    const match = s.match(word.split('').join('.*'));
    console.log(word.split('').join('.*'));
    return match ? true : false;
  };

  // O(w*log(w)) - w number of words
  words.sort((a, b) => b.length - a.length);

  for (const word of words) {
    if (isSubSequence(s, word)) {
      return word;
    }
  }
  return '';
};
console.log(longestSubSequence(words, string));
