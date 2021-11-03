import {getRandomNumber, getRandomDecimal, getRandomArray, getRandomElement} from './util.js';

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

const getOffer = () => ({
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
});

const NUMBER_OF_OFFERS = 10;

const similarOffers = () => Array(NUMBER_OF_OFFERS).fill(null).map(getOffer);

export {getOffer, similarOffers};

