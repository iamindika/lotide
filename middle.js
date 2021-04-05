const middle = arr => {
  let midArrElements = [];
  const arrLength = arr.length;
  if (arrLength > 2) {
    if (arrLength % 2 === 1) {
      midArrElements.push(arr[Math.floor(arrLength / 2)]);
    } else {
      midArrElements.push(arr[(arrLength / 2) - 1]);
      midArrElements.push(arr[arrLength / 2]);
    }
  }
  return midArrElements;

  //Alternate solution
  // const arrLength = arrLength;
  // const arrMiddle = Math.floor(arrLength / 2);
  // return (arrLength <= 2) ? [] : ((arrLength % 2 === 0) ? [arr[arrMiddle - 1], arr[arrMiddle]] : [arr[arrMiddle]]);
};

module.exports = middle;


