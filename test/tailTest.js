const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', function() {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", function() {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns ['miss', 'you', 'Scruffy'] for ['I', 'miss', 'you', 'Scruffy']", () => {
    assert.deepEqual(tail(['I', 'miss', 'you', 'Scruffy']), ['miss', 'you','Scruffy']);
  });
  it("returns [] for ['1']", function() {
    assert.deepEqual(tail(['1']), []);
  });
  it("returns [] for []", function() {
    assert.deepEqual(tail([]), []);
  });
});