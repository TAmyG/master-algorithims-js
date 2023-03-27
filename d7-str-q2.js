/**
 * Question 2:Group Anagrams - 
 * Given an array of strings consisting of lower case English letters, group the anagrams together. 
 * You can return the answer in any order. 
 * An Anagram is a word or phrase formed by rearranging 
 * the letters of a different word or phrase, using all the original letters exactly once.
 */

// Time = O(s*nLogn) Space = O(S*n) 
/**
 * Time
 * S -> #strings
 * n -> max number
 * nlogn -> sort each string
 * 
 * Space
 * create sorted array SxN
 * output array SxN
 */
function m1(a = []) {
    const aux = [];
    const hashMap = {};

    for (let i = 0; i < a.length; i++) {
        const element = a[i].split('').sort().join('');
        aux[i] = element;
    }


    for (let i = 0; i < a.length; i++) {
        const key = aux[i];
        if (key in hashMap) {
            hashMap[key].push(a[i]);
        } else {
            hashMap[key] = [a[i]];
        }
    }

    return Object.values(hashMap);
}

const a = ['arc', 'car', 'cat', 'act', 'atc', 'abc'];

console.log(m1(a));