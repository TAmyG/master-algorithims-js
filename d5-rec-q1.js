/**
 * Permutations - Given an array of distinct integers,
 * return all the possible permutations. You can return the answer in any order.
 */


function m1(a = []) {
    const result = [];

    const permutations = function (a = [], i) {
        if (i === a.length - 1) {
            result.push(a.slice());//generate copy array at the end
            return;
        }
        for (let j = i; j < a.length; j++) {
            [a[i], a[j]] = [a[j], a[i]]; //swapped array
            permutations(a, i + 1);
            // is more optimized restore de positions
            [a[i], a[j]] = [a[j], a[i]]
        }
    }


    permutations(a, 0);
    return result;
}




const a = [1, 2, 3];
const b = [1, 2, 3, 4];

console.log(m1(a));
console.log(m1(b));