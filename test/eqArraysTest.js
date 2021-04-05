const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArraysTest', function() {
  it('returns true for [1, 2, 3] and [1, 2, 3]', function() {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('returns false for [1, 2] and [1, 2, 3]', function() {
    assert.strictEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });

  it('returns false for [] and [1]', function() {
    assert.strictEqual(eqArrays([], [1]), false);
  });

  it('returns true for [] and []', function() {
    assert.strictEqual(eqArrays([], []), true);
  });

});

// Test Cases

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), false);
// assertEqual(eqArrays([1, '2'], [1, 2]), false);
// assertEqual(eqArrays([], []), true);