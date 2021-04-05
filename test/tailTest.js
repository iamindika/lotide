const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', function() {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", function() {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [] for ['1']", function() {
    assert.deepEqual(tail(['1']), []);
  });
  it("returns [] for []", function() {
    assert.deepEqual(tail([]), []);
  });
});

// Test Cases

// const arr1 = ['Hello', 'from', 'Lighthouse Labs'];
// const modArr1 = tail(arr1);

// assertEqual(modArr1.length, 2);
// assertEqual(modArr1[0], 'from');
// assertEqual(modArr1[1], 'Lighthouse Labs');
// assertEqual(arr1.length, 3);

// const arr2 = [199];
// const modArr2 = tail(arr2);

// assertEqual(modArr2.length, 0);
// assertEqual(arr2.length, 1);

// const arr3 = [];
// const modArr3 = tail(arr3);

// assertEqual(modArr3.length, 0);
// assertEqual(arr3.length, 0);