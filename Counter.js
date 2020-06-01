class Counter {
  constructor(str) {
    this.str = str;
  }
  howMany(letter) {
    let output1 = this.countLetters(this.str)[letter];
    return output1;
  }

  countLetters = str => {
    const counter = {};
    str
      .toLowerCase()
      .split("")
      .forEach(letter => {
        counter[letter] ? ++counter[letter] : (counter[letter] = 1);
      });

    return counter;
  };
}

const test = new Counter("heyHHH");
module.exports = Counter;

///////////////////////////////////////////////

class Counter {
  constructor(str) {
    this.str = str;
    // this.str = "test"
  }

  countLetter(word) {
    // store in the local memory word = this.str
    // word = "test"
    const counter = {};
    // store a counter const with the value empty object

    // "test" => ["t","e","s","t"]
    word.split("").forEach(letter => {
      // t => counter[t] = 1
      // {t:1}
      // e => counter[e] = 1
      // {t:1, e:1}
      // s => counter[s] = 1
      // {t:1, e:1, s:1}
      // t => counter[t] = counter[t] + 1
      // {t:2, e:1, s:1}
      counter[letter] ? ++counter[letter] : (counter[letter] = 1);
    });
    return counter;
    // {t:2, e:1, s:1}
  }
  howMany(letter) {
    // we store in the local memory a variable
    // letter = "t"
    let countLetter = this.countLetter(this.str);
    return countLetter[letter];
    return this.countLetter(this.str)[letter];
    // return  {t:2, e:1, s:1};
    //{t:2, e:1, s:1}[letter]
    // {t:2, e:1, s:1}[t]
    // {t:2, e:1, s:1}.t
  }
}

const test = new Counter("test");
// We create a new instance of Counter and we store in the local memory the
// something called test
console.log(test.howMany("t"));
// we called the method howMany inside the test object

// this function is here to help you count words in a string
// use it or ignore it, up to you
// it returns an object like: {
// "h": 2,
// "e": 9,
// ...
// }
const countLetters = word => {};

module.exports = Counter;
