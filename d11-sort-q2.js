/**
 * Question 2:Merge Sort-You are given an array of integers.
 * Write a function that will take this array as input and return
 * the sorted array using Merge sort.
 */

// Time =  O(nlogn), Space(n)
function m1(a = []) {
  function splitArray(a = [], level) {
    if (a.length < 2) {
      return a;
    }

    //Divide at middle
    const m = Math.floor(a.length / 2);
    const a1 = splitArray(a.slice(0, m), level + 1);
    const a2 = splitArray(a.slice(m), level + 1);

    //Merge
    let mergedList = [];
    let i = (j = 0);

    while (i < a1.length || j < a2.length) {
      let o1 = i < a1.length ? a1[i] : null;
      let o2 = j < a2.length ? a2[j] : null;

      if (o1 && o2 && o1 > o2) {
        mergedList.push(o2);
        j++;
      } else if (o1 && o2 && o1 < o2) {
        mergedList.push(o1);
        i++;
      } else if (o1 && !o2) {
        mergedList.push(o1);
        i++;
      } else {
        mergedList.push(o2);
        j++;
      }
    }

    //console.log(mergedList);
    return mergedList;
  }

  return splitArray(a, 0);
  //return a;
}

console.log("-->", m1([7, 3, 8, 5, 1, 9, 5]));
console.log("-->", m1([5, 3, 7, 8, 1, 9, 12]));
// console.log(m1([2, 5, 7, 1, 4, 6]));
// console.log(m1([7, 6, 5, 4, 3, 2]));
//console.log(m1([7, 3, 8, 5, 1]));
