/**
 * You are given an array of Integers and another integer targetValue. 
 * Write a function that will take these inputs and return the 
 * indices of the 2 integers in the array that add up targetValue.
 */

//Brute force. Time = O(n^2) Space = O(1)
function m1(a = [], targetValue) {

    if (a.length < 2) {
        return [];
    }

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            let sum = a[i] + a[j];
            if (sum === targetValue) {
                return [i, j];
            }
        }
    }
    return [];
}

//Brute force. Time = O(n^2) Space = O(1)
function m2(a = [], targetValue) {

    if (a.length < 2) {
        return [];
    }

    const hashMap = {}

    for (let i = 0; i < a.length; i++) {
        const x = targetValue - a[i];
        if (hashMap[x] === undefined) {
            hashMap[a[i]] = i;
        } else {
            return [hashMap[x], i];
        }
    }

    return [];
}

const a = [2, 7, 3, -1, 4];
const b = [25];
const c = [1, 2, 3, 4]

//console.log(m1(a, 9)); //[0,1]
//console.log(m1(a, 2)); //[2,3]
//console.log(m1(b, 25));// []
//console.log(m1([], 25));// []

console.log(m2(a, 9)); //[0,1]
console.log(m2(a, 2)); //[2,3]
console.log(m2(b, 25));// []
console.log(m2([], 25));// []
console.log(m2(c, 7));// [2,3]