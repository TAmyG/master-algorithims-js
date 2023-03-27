/**
 * Question 2:Search in 2D Array-Write an efficient algorithm that searches 
 * for a value target in an m x n integer matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.

The first integer of each row is greater than the last integer of the previous row.

If the value is there in the matrix return true, else false.
 */

//Time =  O(logm +  logn) - > log(m+n), Space = O(1)
function m1(a = [], tv) {

    if (a.length === 1) {
        return binary(a[0], tv);
    }

    let l = 0;
    let r = a.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const top = 0;
        const bottom = a[m].length - 1;
        if (tv < a[m][top]) {
            r = m - 1;
        } else if (tv > a[m][bottom]) {
            l = m + 1;
        } else {
            return binary(a[m], tv)
        }
    }
    return false;

    function binary(a = [], tv) {
        let i = 0;
        let j = a.length - 1;
        while (i <= j) {
            const m = Math.floor((i + j) / 2);
            if (tv === a[m]) {
                return true;
            } else if (tv < a[m]) {
                j = m - 1;
            } else {
                i = m + 1;
            }
        }
        return false;
    }
}


const a = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
const b = [[10, 11, 12, 13], [14, 15, 16, 17]]

console.log(m1(a, 7));
console.log(m1(b, 10));