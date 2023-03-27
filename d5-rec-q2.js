/**
 * Power Set - Given an integer array of unique elements, 
 * return all possible subsets (the power set). 
 * The solution set must not contain duplicate subsets. 
 * Return the solution in any order.
 *  */

//Time = O(2^n * n/2) Space =Time = O(2^n * n/2)
function m1(a = []) {
    const superPS = [];

    const generate = function (a = [], i = 0, ss = []) {
        if (i === a.length) {

            //superPS.push(ss);
            superPS.push(ss.slice())
            return;
        }
        ss.push(a[i]);
        generate(a, i + 1, ss);
        ss.pop();
        generate(a, i + 1, ss);
    }



    generate(a, 0, []);
    return superPS;
}


const a = [1, 8, 7];
const b = [];
const c = [9];
const d = [1, 2, 3];// [ [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3] ]

console.log(m1(a));
console.log(m1(b));
console.log(m1(c));
console.log(m1(d));

