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
  const numberArrRandom;

  for (let i = 0; i < numberRandom; i++) {
    numberArrRandom = receiveRandom(arrClon.length - 1);
    arrNew[i] = arrClon[numberArrRandom];
    arrClon.splice(numberArrRandom, 1);
  }
  return arrNew;
};

const getRandomElement = (arr) => {
  let numberRandom = receiveRandom(arr.length - 1);
  return arr[numberRandom];
};

export {getRandomNumber, getRandomDecimal, getRandomArray, getRandomElement};

////////////////////↓ Функция из скайп задачки ↓/////////////////////////////
function numDecline(num, nominative, genitiveSingular, genitivePlural) {
  if (num >= 5 && num <= 20) {
    return genitivePlural
  }
  else {
    num = num % 10;
    if (num == 1) {
        return nominative
    } else if (num >= 2 && num <= 4) {
        return genitiveSingular
    } else {
        return genitivePlural
    }
  }
}
numDecline(101, 'гость', 'гостя', 'гостей');
// Нашел функцию что ниже в интернете(как и полагается лентяю) и уже на ее основе искал варианты решения,
//  что бы подходило все под условия поставленные тобой ;) Вроде все работает как положено

// function declOfNum(number, titles) {
//   cases = [2, 0, 1, 1, 1, 2];
//   return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
// }
// use:
// declOfNum(count, ['найдена', 'найдено', 'найдены']);

// Источник - https://gist.github.com/realmyst/1262561

