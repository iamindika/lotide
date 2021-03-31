const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const without = (source, itemsToRemove) => {
  const newArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
          break;
      }

      if (j === (itemsToRemove.length - 1)) {
        newArr.push(source[i])
      }
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

