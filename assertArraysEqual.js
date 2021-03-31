const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    return console.log(`💯💯💯 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return console.log(`💩💩💩 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;

// Test Cases

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([3, 2, 1], [1, 2, 3]);
// assertArraysEqual([1, '2', 3], [1, 2, 3]);
// assertArraysEqual([], []);