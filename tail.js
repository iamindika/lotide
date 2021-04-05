const tail = arr => {
  let tailArr = [];

  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      tailArr.push(arr[i]);
    }
  }

  return tailArr;
};

module.exports = tail;

