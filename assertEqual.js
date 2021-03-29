const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`💯💯💯 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// Test Code

// assertEqual('Lighthouse Labs', 'Juno');
// assertEqual(1, 1);
// assertEqual('1', 1);
// assertEqual('Coding Rocks!', 'Coding Rocks!');