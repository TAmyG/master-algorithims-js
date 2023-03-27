/**
 * Question 1:Quick Sort-You are given an array of integers.
 * Write a function that will take this array as input and return the sorted array using Quick sort.
 */

// Time = O(nlogn) best case, worst )(n^2)
// To avoid worst pick always middle element
//middle - pivot
//recursive call to lesser side subarray
// function quickSort(a = [], start = 0, end = a.length - 1) {
//   while (start < end) {
//     let pivotIdx = partition(a, start, end);
//     if (pivotIdx - start < end - pivotIdx) {
//       quickSort(a, start, pivotIdx);
//       start = pivotIdx + 1;
//     } else {
//       quickSort(a, pivotIdx + 1, e nd);
//       end = pivotIdx - 1;
//     }
//   }
// }

//recursive call to booth sides
function quickSort(a = [], start = 0, end = a.length - 1) {
  if (start < end) {
    let pivotIdx = partition(a, start, end);
    quickSort(a, start, pivotIdx - 1);
    quickSort(a, pivotIdx + 1, end);
  }
  return a;
}

function partition(a = [], start = 0, end = a.length - 1) {
  let middle = Math.floor((start + end) / 2);
  swap(a, start, middle);

  let pivot = a[start];
  let i = start + 1;
  let j = end;

  while (i <= j) {
    while (a[i] < pivot) {
      i++;
    }

    while (a[j] > pivot) {
      j--;
    }
    if (i < j) {
      swap(array, i, j);
    }
  }

  swap(a, start, j);
  return j;
}

function swap(array = [], i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const a = [5, 4, 0, 3, 1];
quickSort(a);
console.log(a);
