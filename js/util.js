const getRandomNumber = (min, max) => {
  if (max < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] =[max, min];
  }
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomDecimal = (min, max, decimalNumber) => {
  if (max < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] =[max, min];
  }
  return (min + Math.random() * (max - min)).toFixed(decimalNumber);
};


const receiveRandom = (maxNumber) => Math.round(Math.random() * maxNumber);

const getRandomArray = (arr) => {
  const numberRandom = receiveRandom(arr.length);
  const arrClon = arr.slice();
  const arrNew = [];
  const numberArrRandom = receiveRandom(arrClon.length - 1);

  for (let i = 0; i < numberRandom; i++) {
    numberArrRandom;
    arrNew[i] = arrClon[numberArrRandom];
    arrClon.splice(numberArrRandom, 1);
  }
  return arrNew;
};

const getRandomElement = (arr) => {
  let numberRandom = receiveRandom(arr.length - 1);
  return arr[numberRandom];
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {getRandomNumber, getRandomDecimal, getRandomArray, getRandomElement, isEscEvent};


