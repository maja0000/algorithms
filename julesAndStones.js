// You're given strings J representing the types of stones that are jewels,
//  and S representing the stones you have.  Each character in S is a type of stone
//  you have.  You want to know how many of the stones you have are also jewels.

const numJewelsInStones = function (jewels, stones) {
  let newJewels = 0;
  for (const stone of stones) {
    if (jewels.indexOf(stone) !== -1) {
      newJewels++;
    }
  }
  return newJewels;
};
