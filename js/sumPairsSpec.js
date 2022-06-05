var sp = require("./sumPairs");
var deepEqual = require('deep-equal');

console.log(deepEqual(sp.sumPairs([1,2,3,4,5], 9), [[4, 5]]));
console.log(deepEqual(sp.sumPairs([1,2,3,4,5], 7), [[2, 5], [3, 4]]));
console.log(deepEqual(sp.sumPairs([3, 1, 5, 8, 2], 27), 'unable to find pairs'));
console.log(deepEqual(sp.sumPairs([1], 9), 'unable to find pairs'));
console.log(deepEqual(sp.sumPairs([1,2,3,4], 0), 'unable to find pairs'));
console.log(deepEqual(sp.sumPairs([], 9), 'unable to find pairs'));
console.log(deepEqual(sp.sumPairs([-1,-2,-3,-4,-5], -9), [[-4, -5]]));