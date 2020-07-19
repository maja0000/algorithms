var detectCapitalUse = function (word) {
  // either all capitals, all small cases, or Capital follow by small cases
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
};
