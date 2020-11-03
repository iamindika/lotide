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
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  head: head,
  letterPositions: letterPositions,
  tail: tail,
  takeUntil: takeUntil,
  middle: middle,
  without: without
};

//still need to complete two lotide components found on week 1 day 5: Recursive eqObjects, Recursive eqArrays. Blue variables still need to be exported.
//Mocha-Chai Tests completed for: head, middle, tail