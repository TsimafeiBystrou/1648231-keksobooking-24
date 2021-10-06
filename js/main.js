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

getRandomNumber(10,100);
getRandomDecimal(10,100,1);
