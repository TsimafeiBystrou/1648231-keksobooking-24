import {getOffer} from './data.js';

const createOffer = getOffer;

const houseType = {
  flat: 'Квартира',
  bungalo: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarCard = document.querySelector('#card')
  .content
  .querySelector('.popup');

// const photosContainer = document.querySelector('.popup__photos');

const renderPhotos = (container, photos) => {
  Object.keys(photos).forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    container.appendChild(img);
  });
};

const renderFeature = (container, feature) => {
  Object.keys(feature).forEach((item)  => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature', `popup__feature--${item}`);
    container.appendChild(featureItem);
  });
};

const createCard = (card) => {
  const offerElement = similarCard.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = card.offer.title;
  offerElement.querySelector('.popup__text--price').textContent = `${card.offer.price}  ₽/ночь`;
  offerElement.querySelector('.popup__type').textContent = houseType[card.offer.type];
  offerElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout} `;
  offerElement.querySelector('.popup__description').textContent = card.offer.description;
  offerElement.querySelector('.popup__avatar').src = card.author.avatar;

  const offerFeatures = offerElement.querySelector('.popup__features');
  renderFeature(card.offer.features, offerFeatures);

  const offerPhotos = offerElement.querySelector('.popup__photos');
  renderPhotos(card.offer.photos, offerPhotos);

  return offerElement;
};

const renderCard = (container, card) => {
  container.appendChild(createCard(card));
};

export {createOffer, createCard};
