// const assertArrayEquals = require('./assertArraysEqual');
// const eqArrays = require('./eqArrays');

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

  //Alternate solution
  // const arrLength = arr.length;
  // const arrMiddle = Math.floor(arr.length / 2);
  // return (arrLength <= 2) ? [] : ((arrLength % 2 === 0) ? [arr[arrMiddle - 1], arr[arrMiddle]] : [arr[arrMiddle]]);
};

module.exports = middle;

// Test Cases

// assertArrayEquals(middle([1]), []);
// assertArrayEquals(middle([1, 2]), []);
// assertArrayEquals(middle([1, 2, 3]), [2]);
// assertArrayEquals(middle([1, 2, 3, 4, 5]), [3]);
// assertArrayEquals(middle([1, 2, 3, 4]), [2, 3]);
// assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


