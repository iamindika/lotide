//Function Implementation
//Built the string so that it would include quotations for string arguments otherwise it won't
//Requires npm package node-emoji
let emoji = require('node-emoji');

const assertEqual = function(actual, expected) {
  const isEqual = actual === expected;
  let str = `${isEqual ? emoji.emojify(':100::100::100:Assertion') : emoji.emojify(':poop::poop::poop:Assertion')} ${isEqual ? 'Passed:' : 'Failed:'} ${(typeof actual === 'string') ? `"${actual}"` : actual} ${isEqual ? '===' : '!=='} ${(typeof expected === 'string') ? `"${expected}"` : expected}`;
  console.log(str);
};

module.exports = assertEqual;