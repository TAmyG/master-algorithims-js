/**
 * Question 1:Find First and Last Position of Element in
 *  Sorted Array-You are given an array of integers sorted in non-decreasing order, 
 * find the starting and ending position of a given target value. 
 * If target is not found in the array, return [-1, -1]. 
 * You must write an algorithm with O(log n) runtime complexity.
 */

//Time = O(2*logn) -> O(logn), Space = O(1) Iterative O(logn) Recursive
function m1(a = [], tv) {

    function findLeft(a = [], tv) {
        let i = 0;
        let j = a.length - 1;

        while (i <= j) {
            let m = Math.floor((i + j) / 2);
            // console.log(`i:${i}, j:${j}, m:${m}, a[m]:${a[m]}, tv:${tv}`);
            if (a[m] === tv) {
                if (m === 0) {
                    return m;
                } else if (a[m - 1] === tv) {
                    j = m - 1;
                } else {
                    return m;
                }
            } else if (tv > a[m]) {
                i = m + 1;

            } else {
                j = m - 1;

            }
        }
        return -1
    }


    function findRight(a = [], tv) {
        let i = 0;
        let j = a.length - 1;

        while (i <= j) {
            let m = Math.floor((i + j) / 2);
            //console.log(`i:${i}, j:${j}, m:${m}, a[m]:${a[m]}, tv:${tv}`);
            if (a[m] === tv) {
                if (m === a.length - 1) {
                    return m;
                } else if (a[m + 1] === tv) {
                    i = m + 1;
                } else {
                    return m;
                }
            } else if (tv > a[m]) {
                i = m + 1;
            } else {
                j = m - 1;
            }
        }
        return -1
    }

    const lIndex = findLeft(a, tv);
    const rIndex = findRight(a, tv);

    return [lIndex, rIndex];
}


//Time = O(2*logn) -> O(logn), Space = O(1) Iterative O(logn) Recursive
function m2(a = [], tv) {

    function leftIndex(a = [], tv, i, j) {
        if (i > j) {
            return -1;
        }
        let m = Math.floor((i + j) / 2);
        if (tv === a[m]) {
            if (m === 0) {
                return m;
            } else if (tv === a[m - 1]) {
                return leftIndex(a, tv, i, m - 1);
            } else {
                return m;
            }
        } else if (tv > a[m]) {
            return leftIndex(a, tv, m + 1, j);
        } else {
            return leftIndex(a, tv, i, m - 1);
        }

    }



    function rigthIndex(a = [], tv, i, j) {
        if (i > j) {
            return -1;
        }
        let m = Math.floor((i + j) / 2);
        if (tv === a[m]) {
            if (m === a.length - 1) {
                return m;
            } else if (tv === a[m + 1]) {
                return rigthIndex(a, tv, m + 1, j);
            } else {
                return m;
            }
        } else if (tv > a[m]) {
            return rigthIndex(a, tv, m + 1, j);
        } else {
            return rigthIndex(a, tv, i, m - 1);
        }
    }

    return [leftIndex(a, tv, 0, a.length - 1), rigthIndex(a, tv, 0, a.length - 1)]
}


const a = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 7, 8];
const b = [1, 2, 3, 3, 3, 3, 4, 5];

// console.log(m1(a, 5));
// console.log(m1(b, 3));

console.log(m2(a, 5));
console.log(m2(b, 3));
