// find missing letter alphabeticaly
function findMissingLetter(str) {
  let missing = '';
  // each letter has a code number
  let compare = str.charCodeAt(0);

  str.split('').map((char, index) => {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}
console.log(findMissingLetter('abdef'));
