/**
 * In the Fibonacci sequence, each subsequent term is obtained 
 * by adding the preceding 2 terms. This is true for all 
 * the numbers except the first 2 numbers of the Fibonacci 
 * series as they do not have 2 preceding numbers. 
 * The first 2 terms in the Fibonacci series is 0 and 1. 
 * F(n) = F(n-1)+F(n-2) for n>1. Write a function that finds F(n) 
 * given n where n is an integer greater than equal to 0. 
 * For the first term n = 0. 
 */


//Time = O(2^n) Space = O(n) because we need call stack space between recursive calls
function m1(n) {
    if (n < 2) {
        return n;
    }

    return m1(n - 1) + m1(n - 2);
}


const hashMap = {
    0: 0,
    1: 1
}
//Time = O(n) Space = O(n) 
function m2(n) {
    console.log(hashMap)
    if (n in hashMap) {
        return hashMap[n]
    } else {
        hashMap[n] = m2(n - 1) + m2(n - 2);
        return hashMap[n];
    }

}

//Time = O(n) Space = O(1) 
function m3(n) {
    if (n < 2) {
        return n;
    }

    let prev = count = 0;
    let current = 1;
    for (let i = 2; i <= n; i++) {
        count = prev + current;
        prev = current;
        current = count;

    }
    return count;
}

//console.log(m1(8));
// console.log(m2(8));
console.log(m3(5));