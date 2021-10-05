const getRandomNumber = (min, max) => {
  if (max > min && min >= 0 && max > 0) {
    return Math.round(Math.random() * (max - min) + min);
  }
  throw new Error('Неверное значение');
};

const getRandomDecimal = (min, max, decimalNumber) => {
  if (max > min && min >= 0 && max > 0) {
    return (min + Math.random() * (max - min)).toFixed(decimalNumber);
  }
  throw new RangeError('Неверное значение');
};

getRandomNumber(10,100);
getRandomDecimal(10,100,1);
