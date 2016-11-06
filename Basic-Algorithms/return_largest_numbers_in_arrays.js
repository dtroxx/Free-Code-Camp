/* Return Largest Numbers in Arrays */
/*
- Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
- Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

// for loop solution

function largestOfFour(arr) {
    var largestArr = []; // empty holder array to hold results of largest numbers
      for (var i = 0; i < arr.length; i++) { // iterates through outer arrays
        var largestNum = 0; // set largest number to 0 to compare to initially. Resets after each sub-array iteration
           for (var j = 0; j < arr.length; j++) { // iterates through inner arrays
             if (arr[i][j] >= largestNum) { // if current number in loop is greater than or equal to largestNum.
                largestNum = arr[i][j]; // current number in loop becomes largest number
            }
        }
        largestArr.push(largestNum); // pushes the largest number of each inner array in to holder array.
    }
    console.log(largestArr);
    return largestArr; // returns the new array with largest numbers of each inner array.
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // should return [9, 35, 97, 1000000].

// reduce solution

// function largestOfFour(arr) {
//     var largestArr = []; // empty holder array for result
//     var largestNum; // declare variable for largest numbers of each sub-array
//      for (var i = 0; i < arr.length; i++) { // iterate through each sub-array
//         largestNum = arr[i].reduce(function (a,b) { // for each sub-array use reduce to find largest number
//                 if (a > b) {
//                     return a;
//                 } else {
//                     return b;
//                 }
//             }
//         );
//         largestArr.push(largestNum); // push largest number of each sub-array into largestArr array
//     }
//
//     console.log(largestArr);
//     return (largestArr);
// }
//
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // should return [27,5,39,1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // should return [9, 35, 97, 1000000].

// map() solution

//  function largestOfFour(arr) {
//  return arr.map(function(num) { // iterates through each array
//  return Math.max.apply(null, num); // apply accepts an array and it applies the array as parameters to the actual function (Math.max).
//  });                                  // returns largest number for each array
//  }
//
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // should return [27,5,39,1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // should return [9, 35, 97, 1000000].
