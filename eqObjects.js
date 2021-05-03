let emoji = require('node-emoji');

const assertEqual = function(actual, expected) {
  const isEqual = actual === expected;
  let str = `${isEqual ? emoji.emojify(':100::100::100:Assertion') : emoji.emojify(':poop::poop::poop:Assertion')} ${isEqual ? 'Passed:' : 'Failed:'} ${(typeof actual === 'string') ? `"${actual}"` : actual} ${isEqual ? '===' : '!=='} ${(typeof expected === 'string') ? `"${expected}"` : expected}`;
  console.log(str);
};

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

const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) {
    return false;
  } else {
    for (const key of objKeys1) {
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (!eqArrays(object1[key], object2[key])) {
            return false;
          }
        } else {
          return eqObjects(object1[key], object2[key]);
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};



//Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false