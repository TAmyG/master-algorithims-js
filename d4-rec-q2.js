/**
 * "Let’s define a peculiar type of array in which each element 
 * is either an integer or another peculiar array. 
 * Assume that a peculiar array is never empty. 
 * Write a function that will take a peculiar array as its input 
 * and find the sum of its elements. If an array is an element 
 * in the peculiar array you have to convert it to it’s equivalent value 
 * so that you can sum it with the other elements. 
 * Equivalent value of an array is the sum of its elements 
 * raised to the number which represents how far nested it is. 
 * For e.g. [2,3[4,1,2]] = 2+3+ (4+1+2)^2 
[1,2,[7,[3,4],2]] = 1 + 2 +( 7+(3+4)^3+2)^2"
 */

// Time = O(n) Space=O(d) d=deepest level power
function m1(a = [], exp = 0) {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            sum += m1(a[i], exp + 1);
        } else {
            sum += a[i];
        }
    }

    return Math.pow(sum, exp + 1);
}


console.log(m1([1, 2, 3]));// 6
console.log(m1([1, 2, [3]]));// 12
console.log(m1([1, 2, [3, 4], [[2]]]));// 116
