/**
 * Question 2:Palindrome-You are given a string. 
 * Write a function to check whether the string is a palindrome or not.
 */

//Time = O(n^2) Space = O(n). because in JS strings are inmutable so every time aux is a new string
function m1(str = '') {

    let aux = '';

    for (let i = str.length - 1; i >= 0; i--) {
        aux += str[i];
    }

    return str === aux;
}

//Time = O(n) Space = O(n). space n because new array created to convert string
function m2(str = '') {

    let aux = [];
    for (let i = str.length - 1; i >= 0; i--) {
        aux.push(str[i]);
    }

    let reverseAux = aux.join('');



    return str === reverseAux;
}

//Time = O(n) Space = O(1).
function m3(str = '') {
    let i = 0;
    let j = str.length - 1;

    while (i <= j) {
        if (str[i] !== str[j]) {
            return false
        }

        i++;
        j--;
    }
    return true;
}



const a = 'malayalam';
const b = 'aa';
const c = 'aA';


// console.log(m1(a));//true
// console.log(m1(b));//true
// console.log(m1(c));//false

// console.log(m2(a));//true
// console.log(m2(b));//true
// console.log(m2(c));//false

console.log(m3(a));//true
console.log(m3(b));//true
console.log(m3(c));//false
