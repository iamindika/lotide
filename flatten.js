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

const flatten = arr => {
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArray.push(arr[i][j]);
      }
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

//Test Code
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

//Supposed to fail. Call to isEqual not implement to check equality of nested arrays
assertArraysEqual(flatten([1, [2, [3]], [[[4]]]]), [1, 2, [3], [[4]]]);

assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(flatten([]), []);

