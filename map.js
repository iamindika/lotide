const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const displayFirstLetter = str => str[0];



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
    console.log(emoji.emojify(`:poop::poop::poop:Assertion Failed: ${arr1} !== ${arr2}`));
  }
};

//Test Code
const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["create", "your", "own", "sunshine"];
const words3 = ["if", "not", "now", "when"];

const results1 = map(words1, word => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words2, word => word[0]), ['c', 'y', 'o', 's']);
assertArraysEqual(map(words3, displayFirstLetter), ['i', 'n', 'n', 'w']);
// assertArraysEqual([1, 2], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);
// assertArraysEqual([], [1]);
// assertArraysEqual([], []);

