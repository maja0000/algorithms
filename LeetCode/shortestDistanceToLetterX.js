
// Given a string S and a character C, return an array of integers 
// representing the shortest distance from the character C in the string.

const shortestToChar = (S, C) => {
  const result = new Array(S.length);

  // forwardCounter starts high to ensure overwrites
  for (let i = 0, forwardCounter = Infinity; i < result.length; i++) {
    console.log(forwardCounter)
    // If the sought character is found
    if (S[i] === C) {
      // Fill current
      result[i] = 0;
      // Fill backwards; overwrite where needed
      for (let j = 1; j <= i; j++) {
        // But don't overwrite closer results
        if (result[i - j] < j) break;
        result[i - j] = j;
      }
      // Reset forwardCounter
      forwardCounter = 1;
    } else {
      // Otherwise result is just current
      result[i] = forwardCounter++;
    }
  }

  return result;
};
console.log(shortestToChar("loveleetcode", 'e'))
