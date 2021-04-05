const assert = require('chai').assert;
const middle = require('../middle');
const assertArrayEquals = require('./assertArraysEqual');

describe("#middle", function() {
  it('returns [] for [1]', function() {
    assert.deepEqual(middle([1]), []);
  });

  it('returns [] for [1, 2]', function() {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns [2] for [1, 2, 3]', function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [2, 3] for [1, 2, 3, 4]', function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", function() {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });

  it("returns ['and', 'Good'] for ['Hello', 'and', 'Good', 'Bye']", function() {
    assert.deepEqual(middle(['Hello', 'and', 'Good', 'Bye']), ['and', 'Good']);
  });
});

// Test Cases

// assertArrayEquals(middle([1]), []);
// assertArrayEquals(middle([1, 2]), []);
// assertArrayEquals(middle([1, 2, 3]), [2]);
// assertArrayEquals(middle([1, 2, 3, 4, 5]), [3]);
// assertArrayEquals(middle([1, 2, 3, 4]), [2, 3]);
// assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]);




