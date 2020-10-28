//Function Implementation
//Built the string so that it would include quotations for string arguments otherwise it won't
//Requires npm package node-emoji
let emoji = require('node-emoji');

// const assertEqual = function(actual, expected) {
//   const isEqual = actual === expected;
//   let str = `${isEqual ? emoji.emojify(':100::100::100:Assertion') : emoji.emojify(':poop::poop::poop:Assertion')} ${isEqual ? 'Passed:' : 'Failed:'} ${(typeof actual === 'string') ? `"${actual}"` : actual} ${isEqual ? '===' : '!=='} ${(typeof expected === 'string') ? `"${expected}"` : expected}`;
//   console.log(str);
// };

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

const middle = arr => {
  let midArrElements = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 1) {
      midArrElements.push(arr[Math.floor(arr.length / 2)]);
    } else {
      midArrElements.push(arr[(arr.length / 2) - 1]);
      midArrElements.push(arr[arr.length / 2]);
    }
  }
  return midArrElements;
};

//Test Code
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

