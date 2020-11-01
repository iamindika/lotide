const takeUntil = function(array, callback) {
  // ...
  let slice = [];
  let isTruthy = false;
  for (let i = 0; i < array.length && !isTruthy; i++) {
    isTruthy = callback(array[i]);
    if (!isTruthy) {
      slice.push(array[i]);
    }
  }
  return slice;
};

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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);

const data3 = [20, 23, 37, 39, 41];
assertArraysEqual(takeUntil(data3, x => x % 2 !== 1), []);

const data4 = [9, 2, 5, 6, 34, 4, 6];
assertArraysEqual(takeUntil(data4, x => x > 10), [9, 2, 5, 6]);
