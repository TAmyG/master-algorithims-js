/**
 * Question 1:Longest Unique char Substring - Given a string s, 
 * find the length of the longest substring without repeating characters.
 */

function m1(str = '') {
    let size = 0;
    const hashMap = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        const curr = str[i];

        if (curr in hashMap) {
            start = Math.max(start, hashMap[curr] + 1);
            hashMap[curr] = i;
        } else {
            hashMap[curr] = i;
        }


        size = Math.max(size, i + 1 - start);

    }
    return size;
}

const a = 'xyzxp';
const b = 'pppp';
const c = 'abcbccd';
const d = 'pqbrstburwvxy';
const e = 'pqbrstbuvwpvy';

console.log(m1(a));//4
console.log(m1(b));//1
console.log(m1(c));//3
console.log(m1(d));//9
console.log(m1(e));//8