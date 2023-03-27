/**
 * Question 2:Radix Sort-You are given an array of non-negative integers.
 * Write a function that will take this array as input and return the sorted array using Radix sort.
 */
// Time counting array O(n), cumulative Arrrray O(k) k is 0-9 digits. output array O(n)
// Time of all solution = O(n+k)
// counting array k, output n
// Space of all solution =  O(n+k)

// function countingSort(a = []) {
//   const countList = [];
//   const cumulativeSum = [];
//   const sortedList = [];

//   //fill digit arrays
//   for (let i = 0; i < 10; i++) {
//     countList.push(0);
//     cumulativeSum.push(0);
//   }

//   //counting elements
//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     countList[element]++;
//   }

//   cumulativeSum[0] = countList[0];

//   //cumulative Sum
//   for (let i = 1; i < countList.length; i++) {
//     cumulativeSum[i] = cumulativeSum[i - 1] + countList[i];
//   }

//   //ordering in new array
//   for (let i = a.length - 1; i >= 0; i--) {
//     const el = a[i];
//     const sum = cumulativeSum[el] - 1;
//     sortedList[sum] = el;
//     cumulativeSum[el] = sum;
//   }

//   return sortedList;
// }

function countingSort(a = [], place) {
  const temp = new Array(10).fill(0);
  const output = new Array(a.length).fill(0);
  const digitPlace = Math.pow(10, place);

  for (let num of a) {
    let digit = Math.floor(num / digitPlace) % 10;
    temp[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    temp[i] = temp[i] + temp[i - 1];
  }

  for (let j = a.length - 1; j >= 0; j--) {
    const currDigit = Math.floor(a[j] / digitPlace) % 10;
    temp[currDigit]--;
    const insertPosition = temp[currDigit];
    output[insertPosition] = a[j];
  }

  console.log(output);
  for (let i = 0; i < output.length; i++) {
    a[i] = output[i];
  }
}

///Time = O(d*(n+k) if base 10 -> O(n)
//Space = O(n+k)
function radixSort(a = []) {
  //sort units
  if (a.length === 0) {
    return "array is empty";
  }

  const greatestNumber = Math.max(...a); //Max number
  /**
   * log10^100 = 2
   * log10^10 = 1
   * log10^1000 = 3
   * log10^234 =
   */
  const numberDigits = Math.floor(Math.log10(greatestNumber)) + 1;
  //sorting numberDigits times.
  for (let i = 0; i < numberDigits; i++) {
    countingSort(a, i);
  }

  return a;
}

//console.log(countingSort([7, 5, 3, 0, 1, 3, 7, 8]));
console.log(radixSort([234, 100, 549, 1, 2, 4]));
