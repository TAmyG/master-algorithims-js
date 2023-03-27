/**
 * Question 2:Insertion Sort -You are given an array of integers.
 *  Write a function that will take this array as input and return the sorted array using Insertion sort.
 */

//Time = O(n^2) Space = O(1)
function m1(a = []) {
  if (a.length < 2) {
    return a;
  }

  for (let i = 1; i < a.length; i++) {
    let j = i - 1;
    let temp = a[i];
    let chkBack = true;
    while (chkBack) {
      if (j < 0) {
        chkBack = false;
      } else if (a[j] > temp) {
        a[j + 1] = a[j];
        a[j] = temp;
      } else {
        chkBack = false;
      }
      j--;
    }
  }

  return a;
}

console.log(m1([7, 3, 8, 5, 1]));
console.log(m1([1, 2, 3, 4]));
console.log(m1([4, 3, 2, 5]));
console.log(m1([3, 1, 1]));
