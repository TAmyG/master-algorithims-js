/**
 * Question 1:Non repeating character - You are given a string 
 * consisting of only lower case and upper-case 
 * English Alphabets and integers 0 to 9. 
 * Write a function that will take this string as 
 * Input and return the index of the first character that is non-repeating.
 */

//Time = O(n^2) Space=O(1)
function m1(str = '') {
    for (let i = 0; i < str.length; i++) {
        let nonRep = true;
        for (let j = 0; j < str.length; j++) {
            if (i !== j) {
                if (str[i] === str[j]) {
                    nonRep = false;
                }
            }
        }
        if (nonRep) {
            return i;
        }
    }

    return null;
}

//Time = O(n) Space=O(1)
function m2(str = "") {
    const hashMap = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] in hashMap) {
            hashMap[str[i]]++;
        } else {
            hashMap[str[i]] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (hashMap[str[i]] === 1) {
            return i;
        }

    }

    return null;

}


const a = 'Aabc1Acbd';
const b = 'aaAA33';
const c = 'abAA1ac';

// console.log(m1(a));//1
// console.log(m1(b));//null
// console.log(m1(c));//0

console.log(m2(a));//1
console.log(m2(b));//null
console.log(m2(c));//0