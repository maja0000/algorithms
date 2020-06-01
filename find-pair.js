let ar = [10,20,30,20,3,5,7,100]
// return a pair

function sockMerchant(n, ar) {
  let pairs = 0;
  let sorted = ar.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++ && i++;
    }
  }
  return pairs;
}

// better
function sockMerchant(n, ar) {
  let socksCount = {};
  let sum = 0;
  for (let x of ar) {
    if (socksCount[x]) {
      socksCount[x] += 1;
    } else {
      socksCount[x] = 1;
    }

    if (socksCount[x] % 2 == 0) {
      sum += 1;
    }
  }

  return sum;
}
// also good 
function sockMerchant(n, ar) {
  let pile = [];
  let pairs = 0;

  for(let i = 0; i < ar.length; i++) {
      let sockLocation;

      if (pile.length === false) {
          pile.push(ar[i]);
        console.log("!", pile)
      } else {
          sockLocation = pile.indexOf(ar[i]);
      } 

      if (sockLocation === -1) {
          pile.push(ar[i]);
      } else {
          pile.splice(sockLocation,1);
          pairs += 1; 
      }
  }
return pairs;
}
console.log(sockMerchant(7,ar)