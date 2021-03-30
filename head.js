const assertEqual = require('./assertEqual');

const head = arr => arr[0];

module.exports = head;

// Test Cases

// assertEqual(head([3, 2, 1]), 3);
// assertEqual(head(['beginning', 'end']), 'beginning');
// assertEqual(head([1, 2, 3, 4]), 2);