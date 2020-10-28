//Requires npm package node-emoji
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

const without = (source, itemsToRemove) => {
  let newArr = [];
  let isToBeRemoved;
  for (let i = 0; i < source.length; i++) {
    isToBeRemoved = false;
    for (let j = 0; j < itemsToRemove.length && !isToBeRemoved; j++) {
      if (source[i] === itemsToRemove[j]) {
        isToBeRemoved = true;
      }
    }
    if (!isToBeRemoved) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

//Test Code
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([], [1, 2, 3]), []);
assertArraysEqual(without([], []), []);
assertArraysEqual(without(['Remove', 'Harry', 'and', 'you', 'will', 'stay'], ['Remove', 'you', 'and']), ['Harry', 'will', 'stay']);

