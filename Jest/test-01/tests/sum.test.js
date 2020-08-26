// Get tne ffile with function
const sum = require('../sum.js');

// use the module
test("Adds 1 + 3 to equal 4", () => {
    expect( sum(1, 3)).toBe(4);
});