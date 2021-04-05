const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', function() {
  it('returns false for "Lighthouse Labs" and "Bootcamp"', function() {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });

  it("returns true for 'Scruffy!' and 'Scruffy!'", function() {
    assert.strictEqual(assertEqual('Scruffy!', 'Scruffy!'), true);
  });

  it('returns true for 1 and 1', function() {
    assert.strictEqual(assertEqual(1, 1), true);
  });

  it('returns false for 1 and 2', function() {
    assert.strictEqual(assertEqual(1, 2), false);
  });
});


// Test Code

// assertEqual('Lighthouse Labs', 'Juno');
// assertEqual(1, 1);
// assertEqual('1', 1);
// assertEqual('Coding Rocks!', 'Coding Rocks!');