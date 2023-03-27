/**
 * Question 2:Search in Rotated Sorted array- 
 * You are given an integer array nums sorted in ascending 
 * order (with distinct values). 
 * Prior to being passed to your function, nums is possibly 
 * rotated at an unknown pivot index k (1 <= k < nums.length) 
 * such that the resulting array is 
 * [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1],
 *  ..., nums[k-1]] (0-indexed).  For example, [0,1,2,4,5,6,7] 
 * might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 *  Given an integer target, return the index of target if it is 
 * in the array, else return -1. 
 * You must write an algorithm with O(log n) runtime complexity.
 */

function m1(nums = [], target) {

    let left = 0;
    let right = a.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) return middle;
        if (nums[left] <= nums[middle]) {
            //left part is sorted 
            if (target >= nums[left] && target < nums[middle]) {
                //explore left part
                right = middle - 1;
            } else {
                //explore right part
                left = middle + 1;
            }
        } else {
            //right sorted
            if (target <= nums[right] && target > nums[middle]) {
                //explore right part
                left = middle + 1;
            } else {
                //explore left part
                right = middle - 1;
            }
        }
    }
};


const a = [1, 2, 3, 4, 5, 6];
const b = [3, 4, 5, 6, 1, 2];
const c = [5, 6, 1, 2, 3, 4];
console.log(m1(a, 3));
console.log(m1(b, 3));
console.log(m1(c, 3));
