const middle = arr => {
  let midArrElements = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 1) {
      midArrElements.push(arr[Math.floor(arr.length / 2)]);
    } else {
      midArrElements.push(arr[(arr.length / 2) - 1]);
      midArrElements.push(arr[arr.length / 2]);
    }
  }
  return midArrElements;
};

module.exports = middle;


