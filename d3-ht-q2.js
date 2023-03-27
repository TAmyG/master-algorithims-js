/**
 * "Given two strings s and t, determine if they are isomorphic. 
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character 
while preserving the order of characters. No two characters may map to the same character, 
but a character may map to itself. s and t consist of any valid ascii character. "
 */

function m1(s = '', t = '') {
    if (s.length !== t.length) {
        return false;
    }

    const hashMap = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] in hashMap && hashMap[s[i]] !== t[i]) {
            return false
        } else {
            hashMap[s[i]] = t[i];
        }
    }

    return true;
}



console.log(m1('abacus', 'rirfgs')); // true
console.log(m1('carro', 'acoor')); // true
console.log(m1('aba', 'pqr')); // false
console.log(m1('aaca', 'bbdr')); // false