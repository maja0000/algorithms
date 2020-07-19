function jumpingOnClouds(c) {
  let jumps = 0;
  let i = 0;
  while (true) {
    if (i + 2 < c.length && c[i + 2] == 0) {
      i += 2;
    } else if (i + 1 < c.length) {
      i++;
    } else {
      break;
    }
    jumps++;
  }
  return jumps;
}
