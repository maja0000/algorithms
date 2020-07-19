function fizzBuzz() {
  for (let i = 0; i <= 100; i++)
    console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
}
console.log(fizzBuzz());
