exports.sumPairs = function(num_array, target) {
    let pairs = [];

    for (let i = 0; i < num_array.length - 1; i++) {
        let bind = num_array[i];
        for (let j = i + 1; j < num_array.length; j++) {
            let comp = num_array[j]
            if (bind + comp === target) {
                pairs.push([bind, comp]);
            }
        }
    }

    if (pairs.length === 0) {
        return 'unable to find pairs';
    } else {
        return pairs;
    }
};

// console.log(sumPairs([1,2,3,4,5], 9))
// console.log(sumPairs([1,2,3,4,5], 7))
// console.log(sumPairs([3, 1, 5, 8, 2], 27))
