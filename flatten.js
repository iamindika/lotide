// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

const flatten = arr => {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArray.push(arr[i][j]);
      }
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;

//Test Code
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

//Supposed to fail. Call to isEqual not implement to check equality of nested arrays
// assertArraysEqual(flatten([1, [2, [3]], [[[4]]]]), [1, 2, [3], [[4]]]);

// assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
// assertArraysEqual(flatten([]), []);

