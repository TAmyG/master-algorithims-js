/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * 1. reverse
 * 2. reverse [0, k-1] and reverse [k, length -1]
 */

function reverse(array = [], start, end) {
    while (start < end) {
        [array[start], array[end]] = [array[end], array[start]];
        start++;
        end--;
    }
}


function m2(array = [], k) {

    k = k % array.length;
    //1. reverse
    reverse(array, 0, array.length - 1);
    reverse(array, 0, k - 1);
    reverse(array, k, array.length - 1);



    return array;
}

const a = [1, 2, 3, 4, 5, 6];// k = 4

console.log(m2(a, 22))