import { onMapFiltersChange, resetMapAndMarker } from './map.js';
import { renderErrorMesssage, renderSuccessMesssage } from './message.js';
import { serverRequest } from './fetch.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE_VALUE = 0;
const MAX_PRICE_VALUE = 1000000;
const mapFilters = document.querySelector('.map__filters');
const form = document.querySelector('.ad-form');
const resetButton = form.querySelector('.ad-form__reset');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const type = form.querySelector('#type');
const time = form.querySelector('.ad-form__element--time');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const guestNumber = form.querySelector('#capacity').querySelectorAll('option');

const maxGuestsInRoom = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const minPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

title.addEventListener('input', () => {
  const valueLength = title.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Eщё ${MIN_TITLE_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} символов`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
});

price.addEventListener('input', () => {
  const priceForRoom = price.value.length;
  if (priceForRoom < MIN_PRICE_VALUE) {
    price.setCustomValidity(`Возможная цена начинается с ${MIN_PRICE_VALUE} рублей`);
  }
  else if (priceForRoom > MAX_PRICE_VALUE) {
    price.setCustomValidity(`Возможная цена ограничена ${MAX_PRICE_VALUE} рублями`);
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
});

const validateRooms = () => {
  const roomValue = roomNumber.value;

  guestNumber.forEach((guest) => {
    const isDisabled = (maxGuestsInRoom[roomValue].indexOf(guest.value) === -1);
    guest.selected = maxGuestsInRoom[roomValue][0] === guest.value;
    guest.disabled = isDisabled;
    guest.hidden = isDisabled;
  });
};

const onRoomNumberChange = () => {
  validateRooms();
};

roomNumber.addEventListener('change', onRoomNumberChange);

const onTimeChange = (evt) => {
  timeOut.value = evt.target.value;
  timeIn.value = evt.target.value;
};

time.addEventListener('change', onTimeChange);

const onPriceChange = () => {
  const priceSelect = minPrices[type.value];
  price.placeholder = priceSelect;
  price.min = priceSelect;

};

type.addEventListener('change', onPriceChange);

const resetForm = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    form.reset();
    mapFilters.reset();
    resetMapAndMarker();
    onMapFiltersChange();
  });
};

resetForm();

const renderSuccess = () => {
  renderSuccessMesssage();
  form.reset();
  mapFilters.reset();
  resetMapAndMarker();
  onMapFiltersChange();
};

const renderError = () => {
  renderErrorMesssage();
};

const renderMessages = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    serverRequest(renderSuccess, renderError, 'POST', formData);
  });
};

renderMessages();
