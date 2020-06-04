// convert a string to a new string where each
// character in the new string is "(" if that character appears only once in the
// original string, or ")" if that character appears more than once in the original
//  string. Ignore capitalization when determining if a character is a duplicate.

// Example:

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// ```

function duplicateEncode(word) {
  let newArray = word.toLowerCase().split('');
  let finalWord = '';

  for (let i = 0; i < newArray.length; i++) {
    let character = newArray.indexOf(newArray[i]);
    if (character === newArray.lastIndexOf(newArray[i])) {
      finalWord += '(';
    } else {
      finalWord += ')';
    }
  }
  return finalWord;
}
console.log(duplicateEncode('Hellolol@@!'));
