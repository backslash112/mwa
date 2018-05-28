use 'strict';

// question 1
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
