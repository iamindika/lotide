// const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;

// Test Cases

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), false);
// assertEqual(eqArrays([1, '2'], [1, 2]), false);
// assertEqual(eqArrays([], []), true);