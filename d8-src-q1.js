/**
 * Question 1:Binary Search - Given an array of integers 
 * which is sorted in ascending order, and a target integer, 
 * write a function to search for whether the target integer 
 * is there in the given array. If it is there then return its index. 
 * Otherwise, return -1. You must write an algorithm with O(log n)
 * runtime complexity. 
 */

// Time = O(logn) Space = O(1)
function m1(a = [], tv) {
    let i = 0;
    let j = a.length - 1;

    while (i <= j) {
        const pivot = Math.floor((j + i) / 2);
        if (tv === a[pivot]) {
            return pivot;
        } else if (tv < a[pivot]) { //Reduce range
            j = pivot - 1;
        } else if (tv > a[pivot]) {
            i = pivot + 1;
        }
    }
    return -1;
}

// Time = O(logn) Space = O(logn)
function m2(a = [], tv) {
    function recursive(a = [], tv, i, j) {
        if (i > j) {
            return -1;
        }

        const pivot = Math.floor((i + j) / 2);

        if (tv === a[pivot]) {
            return pivot;
        } else if (tv < a[pivot]) {
            return recursive(a, tv, i, pivot - 1);
        } else {
            return recursive(a, tv, pivot + 1, j)
        }
    }

    const result = recursive(a, tv, 0, a.length - 1);

    return result;
}

const a = [2, 3, 7, 9, 11, 23, 37, 81, 87, 89];

console.log(m1(a, 11));