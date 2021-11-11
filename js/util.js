const getRandomNumber = (min, max) => {
  if (max < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomDecimal = (min, max, decimalNumber) => {
  if (max < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
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
  const someNumber = receiveRandom(arr.length - 1);
  return arr[someNumber];
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { getRandomNumber, getRandomDecimal, getRandomArray, getRandomElement, isEscEvent, debounce };


