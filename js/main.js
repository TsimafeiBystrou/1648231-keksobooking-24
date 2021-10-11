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

const author = {
  avatar: ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png', 'img/avatars/user09.png', 'img/avatars/user10.png'],
};

const offer = {
  title: ['Уютное жильё', 'Неуютное жильё'],
  address: '{{location.lat}}, {{location.lng}}',
  price: getRandomNumber(1, 1000),
  type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  rooms: getRandomNumber(1, 5),
  guests: getRandomNumber(1, 5),
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: ['Самая уютная комната', 'Самая неуютная комната'],
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
};

const locationX = getRandomDecimal(35.65000, 35.70000, 5);
const locationY = getRandomDecimal(139.70000, 139.80000, 5);

const getOffer = () => {
  return {
    author: {
      avatar: getRandomElement(author.avatar),
    },
    offer: {
      title: getRandomElement(offer.title),
      address: `${locationX}, ${locationY}`,
      price: offer.price,
      type: getRandomElement(offer.type),
      rooms: offer.rooms,
      guests: offer.guests,
      checkin: getRandomArray(offer.checkin),
      checkout: getRandomArray(offer.checkout),
      features: getRandomArray(offer.features),
      description: getRandomElement(offer.description),
      photos: getRandomArray(offer.photos),
    },
    location: {
      lat: locationX,
      lng: locationY,
    },
  };
};

getOffer(1);
