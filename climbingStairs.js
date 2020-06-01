// You are climbing a stair case. It takes n steps to reach to the top.

//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
//2. 2 steps

let climbStairs = function (n) {
  const ary = [1, 1];
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      ary[i] = ary[i - 1] + ary[i - 2];
    }
  }
  return ary[ary.length - 1];
};
console.log(climbStairs(5));
