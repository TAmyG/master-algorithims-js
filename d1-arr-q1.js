/**
 * You are given an array of Integers in which each subsequent
 *  value is not less than the previous value.
 * Write a function that takes this array as an input and returns a new array
 * with the squares of each number sorted in ascending order.
 */

// In: [1,2,3]
// Out: [1,9,25]

/*
 M1. Brute force method
 Time = O(nLog(n)) Space = O(n)
 */
function m1(array = []) {
    const newArray = new Array(array.length).fill(0);
    for (let i = 0; i < array.length; i++) {
        newArray[i] = Math.pow(array[i], 2);

    }

    newArray.sort((a, b) => a - b);
    return newArray;

}

/**
 * Time = O(n) Space = O(n)
 */
function m2(array = []) {
    const newArray = new Array(array.length).fill(0);
    let pointerL = 0;
    let pointerR = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const leftSquared = Math.pow(array[pointerL], 2);
        const rightSquared = Math.pow(array[pointerR], 2);

        if (leftSquared > rightSquared) {
            newArray[i] = leftSquared;
            pointerL++;
        } else {
            newArray[i] = rightSquared;
            pointerR--;
        }
    }
    return newArray;
}

const a = [1, 3, 4, 5];
const b = [-7, -2, 3, 4, 9];
const c = [];

console.log(m2(a));
console.log(m2(b));
console.log(m2(c));