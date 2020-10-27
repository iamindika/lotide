
let emoji = require('node-emoji');

const assertEqual = function(actual, expected) {
  const isEqual = actual === expected;
  let str = `${isEqual ? emoji.emojify(':100::100::100:Assertion') : emoji.emojify(':poop::poop::poop:Assertion')} ${isEqual ? 'Passed:' : 'Failed:'} ${(typeof actual === 'string') ? `"${actual}"` : actual} ${isEqual ? '===' : '!=='} ${(typeof expected === 'string') ? `"${expected}"` : expected}`;
  console.log(str);
};

const tail = arr => {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++){
    tailArr.push(arr[i]);
  }
  return tailArr;
};

//Test Code
assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual('Scruffy!', 'Scruffy!');
assertEqual(1, 1);
assertEqual(1, 2);
