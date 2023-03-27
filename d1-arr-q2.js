/**
 * An array is monotonic if it is either monotone increasing or monotone decreasing. 
 * An array is monotone increasing if all its elements from left to right are non-decreasing. 
 * An array is monotone decreasing if all  its elements from left to right are non-increasing. 
 * Given an integer array return true if the given array is monotonic, or false otherwise. 
 */

function m1(array = []) {

    if (array.length < 2) {
        return true;
    }


    const first = array[0];
    const last = array[array.length - 1];
    let mI = first <= last
    mD = first > last;


    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        const nextValue = array[i + 1];

        if (mI) {
            if (currentValue > nextValue) return false;
        } else if (mD) {
            if (currentValue <= nextValue) return false;
        }

    }

    return true;

}


const a = [1, 2, 3, 3, 3, 4];//true
const b = [4, 3, 2, 1];//true
const c = [3, 3, 3];//true
const d = [9]; //true
const e = [5, 5, 5, 5, 5, 5, 10, 1]; //false
const f = [9]; //true


console.log(m1(a));
console.log(m1(b));
console.log(m1(c));
console.log(m1(d));
console.log(m1(e));
console.log(m1(f));