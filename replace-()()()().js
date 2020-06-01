# Duplicate Encoder

## Dscription

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Example:

```javascript
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
```


function duplicateEncode(word) {
  //  ===> indexOf

  // myArray[i]
  //   const searchLetter = "l"
  //   let  indexOf = word.indexOf(searchLetter);

  let newArray = word.toLowerCase().split("");
  let finalWord = "";

  for (let i = 0; i < newArray.length; i++) {
    let character = newArray.indexOf(newArray[i]);
    if (character === newArray.lastIndexOf(newArray[i])) {
      finalWord += "(";
    } else {
      finalWord += ")";
    }

    // "test" first occurence - indexOf
    // '1'
    // '2'
    // '3'
    // '1'

    // in case the letter is just once the first occurence and the last occurence is the same

    // 'test' last occurence - Last IndexOf
    // '4'
    // '2'
    // '3'
    // '4'

    // console.log(newArray.indexOf(newArray[i]), newArray[i]);
    // console.log(newArray.lastIndexOf(newArray[i]), newArray[i]);
    // console.log(character);
  }
  return finalWord;
  console.log(finalWord);
  //   console.log(newWord);
}
console.log(duplicateEncode("Hellolol@@!"));
// It could be great if we were able to compare from left to right with from right to left
//  012242428810
// 0 H appear in position 0 for the first time - 0 H appear in position 0 => is 0 = 0 ? is H more than once
// 1 e appear in position 1 for the first time - e appear in position 1 => is 1 = 1 ? is e more than once ?
// 2 l appear in position 2 for the first time - l appear in position 7 => is 2 = 7 ? is l more than once ?
// 2 l appear in position 2 for the first time - l appear in position 7 => is 2 = 7 ? is l more than once ?
// 4 o appear in position 4 for the first time - o appear in position 6 => is 4 = 6 ?  is o more than once ?
// 2 l appear in position 2 for the first time - l appear in position 7 .... you get it
// 4 o appear in position 4 for the first time - o appear in position 6
// 2 l appear in position 2 for the first time - l appear in position 7
// 8 @ appear in position 8 for the first time - @ appear in position 9
// 8 @ appear in position 8 for the first time - @ appear in position 9
// 10 ! appear in position ! for the first time - ! appear in position 10

module.exports = duplicateEncode;

// Last hint : https://www.dotnetperls.com/indexof-js <= can't do much .????
