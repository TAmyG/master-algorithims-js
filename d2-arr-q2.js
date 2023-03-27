/**
 * "You are given an integer array height of length n. 
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, 
such that the container contains the most water(depth is constant across containers). 
Return the area(that the 2 lines and the X axis make) of container which can store the max amount of water.
 Notice that you may not slant the container. "

  0,1,2,3,4
 [1,5,6,3,4]

 (0,0) (0,1)
 (0,1) (1,5)
 (0,2) (2,6)
 (0,3) (3,3)
 (0,4) (4,4)
 */

/**
 * 
 * @param {*} array 
 * Brute force
 */
function m1(a = []) {

    let maxArea = 0;
    for (let i = 0; i < a.length; i++) {

        for (let j = i + 1; j < a.length; j++) {
            const h = a[i] < a[j] ? a[i] : a[j]; //Select the min value
            const b = j - i;
            const area = h * b;

            maxArea = area > maxArea ? area : maxArea;
        }

    }

    return maxArea;
}


function m2(a = []) {
    let maxArea = 0;
    let pointerL = 0;
    let pointerR = a.length - 1;

    while (pointerL < pointerR) {
        const valueL = a[pointerL];
        const valueR = a[pointerR];
        const h = Math.min(valueL, valueR);
        const b = pointerR - pointerL;

        maxArea = Math.max(maxArea, h * b);
        if (valueL < valueR) {
            pointerL++;
        } else {
            pointerR--;
        }

    }


    return maxArea;
}

// console.log(m1([3, 7, 5, 6, 8, 4])); //21
// console.log(m1([9, 1, 2, 3, 10])); //36

console.log(m2([3, 7, 5, 6, 8, 4]));
console.log(m2([9, 1, 2, 3, 10]));