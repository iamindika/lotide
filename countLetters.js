//Function Implementation
//Built the string so that it would include quotations for string arguments otherwise it won't
//Requires npm package node-emoji
let emoji = require('node-emoji');

const assertEqual = function(actual, expected) {
  const isEqual = actual === expected;
  let str = `${isEqual ? emoji.emojify(':100::100::100:Assertion') : emoji.emojify(':poop::poop::poop:Assertion')} ${isEqual ? 'Passed:' : 'Failed:'} ${(typeof actual === 'string') ? `"${actual}"` : actual} ${isEqual ? '===' : '!=='} ${(typeof expected === 'string') ? `"${expected}"` : expected}`;
  console.log(str);
};

const countLetters = str => {
  let letterTally = {};
  let sentence = str.split(' ').join('').toLowerCase();
  for (const letter of sentence) {
    if (letterTally[letter]) {
      letterTally[letter]++;
    } else {
      letterTally[letter] = 1;
    }
  }
  return letterTally;
};

//Test Code
assertEqual(countLetters("Lighthouse in the house")['l'], 1);
assertEqual(countLetters("Lighthouse in the house")['i'], 2);
assertEqual(countLetters("Lighthouse in the house")['g'], 1);
assertEqual(countLetters("Lighthouse in the house")['h'], 4);
assertEqual(countLetters("Lighthouse in the house")['t'], 2);
assertEqual(countLetters("Lighthouse in the house")['o'], 2);
assertEqual(countLetters("Lighthouse in the house")['u'], 2);
assertEqual(countLetters("Lighthouse in the house")['s'], 2);
assertEqual(countLetters("Lighthouse in the house")['e'], 3);
assertEqual(countLetters("Lighthouse in the house")['n'], 1);

