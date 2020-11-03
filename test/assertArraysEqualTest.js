const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', function() {
  it('returns true for [1, 2, 3] and [1, 2, 3]', function() {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });

  it('returns false for [1, 2, 3] and [1, 2, 4]', function() {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), false);
  });

  it('returns false for [] and [1]', function() {
    assert.strictEqual(assertArraysEqual([], [1]), false);
  });

  it('returns true for [] and []', function() {
    assert.strictEqual(assertArraysEqual([], []), true);
  });

});
