'use strict';

// question 1:
// Write a method isDual() to be used with all Array objects. An array is Said
// to be dual if it has an even number of elements and each pair of consecutive
// elements sum to the same value. Return 1 If the array Is dual, otherwise return O.

// if the input array is
// [1,2,3,0].isDual() => 1 (because 14+2 == 3+0 == 3)
// [1, 2, 2, 1, 3, 0].isDual() => 1 (because 1+2 == 2+1 == 3+0 == 3)
// [1,1,2,2].isDual() => 0 (because 1+1 == 2 != 2+2)
// [1,2,3].isDual() => 0 (because array does not have an even number of elements)
// [].isDual() => 1

// solution:
const allEquals = arr => {
  return arr.every(item => item === arr[0]);
};

const isDual = arr => {
  // check the length of array
  // if the length is 0 then return true directly
  // if the length is a odd number then return false directly
  if (arr.length === 0) {
    return 1;
  } else if (arr.length % 2 === 1) {
    return 0;
  }

  const result = arr.map((item, index) => {
    // console.log(index);
    if (index % 2 === 0) {
      return item + arr[index+1];
    } else {
      return null;
    }
  })
  .filter(item => item !== null);

  // check result are equals
  return allEquals(result) ? 1 : 0;
};
