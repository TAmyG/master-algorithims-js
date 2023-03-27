/**
 * Question 1:Selection Sort-You are given an array of integers.
 * Write a function that will take this array as input and return
 * the sorted array using Selection sort.
 */

//Time = O(n^2) alwasy, Space = O(1)
function m1(a = []) {
  if (a.length < 2) {
    return a;
  }

  for (let i = 0; i < a.length; i++) {
    let smallIndex = i;
    let j = i + 1;

    while (j < a.length) {
      if (a[j] < a[smallIndex]) {
        smallIndex = j;
      }
      j++;
    }

    if (smallIndex !== i) {
      [a[i], a[smallIndex]] = [a[smallIndex], a[i]];
    }
  }
  return a;
}

console.log(m1([4, 8, 2, 6, 1, 5]));
