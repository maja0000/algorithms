let string = 'maja went to sleep';

function firstBigLetter(str) {
  // let replaced =str.replace(/\b[a-z]/gi,(char)=>{char.toUpperCase()})
  let replaced = str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
    .join(' ');
  return replaced;
}
console.log(firstBigLetter(string));
