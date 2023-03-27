/**
 * Question 1:Bubble Sort - You are given an array of integers.
 * Write a function that will take this array as input and return the sorted array using Bubble sort.
 */

// Time = O(n^2) Space = O(1)
function m1(a = []) {
  if (a.length < 2) {
    return a;
  }

  let sorted = false;
  let counter = 0;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < a.length - counter; i++) {
      console.log(`counter: ${counter + 1}, i: ${i}`);

      if (a[i] > a[i + 1]) {
        sorted = false;
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
      }
    }
    counter++;
  }

  return a;
}

console.log(m1([8, 2, 3, 7, 1]));
