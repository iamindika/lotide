
let emoji = require('node-emoji');

const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(emoji.emojify(`:100::100::100:Assertion Passed: ${arr1} === ${arr2}`));
  } else {
    console.log(emoji.emojify(`:poop::poop::poop:Assertion Failed: ${arr1} === ${arr2}`));
  }
};

const letterPositions = sentence => {
  const results = {};
  let letter;
  for (let i = 0; i < sentence.length; i++) {
    letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

//Test Code
assertArraysEqual(letterPositions('hello you')['h'], [0]);
assertArraysEqual(letterPositions('hello you')['e'], [1]);
assertArraysEqual(letterPositions('hello you')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello you')['o'], [4, 7]);
assertArraysEqual(letterPositions('hello you').y, [6]);
assertArraysEqual(letterPositions('hello you').u, [8]);



