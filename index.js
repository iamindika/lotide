const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const middle = require('./middle');
const without = require('./without');


module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  tail,
  takeUntil,
  middle,
  without
};

//still need to complete two lotide components found on week 1 day 5: Recursive eqObjects, Recursive eqArrays. Blue variables still need to be exported.
//Mocha-Chai Tests completed for: head, middle, tail