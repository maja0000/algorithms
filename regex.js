// REGEX
// trim whitespaces and replace with "&&
// "I&&do&&see&&some&&profits&

let string = '    I do see some profits    ';

function replacesSpace(str) {
  let trimmed = str.replace(/^[ \t]+|[ \t]+$/gi, '');

  x = trimmed.replace(/\s/gi, '&&');
  return x;
}
console.log(replacesSpace(string));
