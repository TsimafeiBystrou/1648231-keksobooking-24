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

const renderPhotos = (container, photos) => {
  container.innerHTML = '';
  photos.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('.popup__photo');
    img.width = 45;
    img.height = 40;
    container.appendChild(img);
  });
};

const renderFeature = (container, feature) => {
  container.innerHTML = '';
  feature.forEach((item) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature', `popup__feature--${item}`);
    container.appendChild(featureItem);
  });
};

const createCard = (card) => {
  const offerElement = similarCard.cloneNode(true);
  if (card.offer.title) {
    offerElement.querySelector('.popup__title').textContent = card.offer.title;
  } else {
    offerElement.remove();
  }
  if (card.offer.price) {
    offerElement.querySelector('.popup__text--price').textContent = `${card.offer.price}  ₽/ночь`;
  } else {
    offerElement.remove();
  }
  if (card.offer.type) {
    offerElement.querySelector('.popup__type').textContent = houseType[card.offer.type];
  } else {
    offerElement.remove();
  }
  if (card.offer.rooms, card.offer.guests) {
    offerElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  } else {
    offerElement.remove();
  }
  if (card.offer.checkin, card.offer.checkout) {
    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout} `;
  } else {
    offerElement.remove();
  }
  if (card.offer.description) {
    offerElement.querySelector('.popup__description').textContent = card.offer.description;
  } else {
    offerElement.remove();
  }
  if (card.author.avatar) {
    offerElement.querySelector('.popup__avatar').src = card.author.avatar;
  } else {
    offerElement.remove();
  }

  const offerFeatures = offerElement.querySelector('.popup__features');
  if (card.offer.features) {
    renderFeature(offerFeatures, card.offer.features);
  } else {
    offerFeatures.remove();
  }

  const offerPhotos = offerElement.querySelector('.popup__photos');
  if (card.offer.photos) {
    renderPhotos(offerPhotos, card.offer.photos);
  } else {
    offerPhotos.remove();
  }

  return offerElement;
};


export { createCard };
