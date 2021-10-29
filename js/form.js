const fields = document.querySelectorAll('fieldset, .map__filters-container > select');

const setFormState = () => {
  fields.forEach((item) => {
    item.disabled = !item.disabled;
  });
};

setFormState();

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE_VALUE = 0;
const MAX_PRICE_VALUE = 1000000;
const title = document.querySelector('#title');
const price = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const type = document.querySelector('#type');
const time = document.querySelector('.ad-form__element--time');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const guestNumber = document.querySelector('#capacity').querySelectorAll('option');

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

// валижация заголовока
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

// валидация стоимости
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

// валидация гостей и комнат
const validateRooms = () => {
  const roomValue = roomNumber.value;

  guestNumber.forEach((guest) => {
    const isDisabled = (maxGuestsInRoom[roomValue].indexOf(guest.value) === -1 ); // методом indexOf идет поиск первого индекса guest.value среди массива maxGuestsInRoom[roomValue]
    guest.selected = maxGuestsInRoom[roomValue][0] === guest.value; // в случае, если value равно первому элементу в массиве, добавляется атбибут selected, в остальных случаях добавляются disabled и hidden
    guest.disabled = isDisabled;
    guest.hidden = isDisabled;
  });
};

const onRoomNumberChange = () => {
  validateRooms();
};

roomNumber.addEventListener('change', onRoomNumberChange);

// валидация чек-ина / чек-аута
const onTimeChange = (evt) => {
  timeOut.value = evt.target.value;
  timeIn.value = evt.target.value;
};

time.addEventListener('change', onTimeChange);

// валидация типа жилья и его стоимости
const onPriceChange = () => {
  const priceSelect = minPrices [type.value];
  price.placeholder = priceSelect;
  price.min = priceSelect;

};

type.addEventListener('change', onPriceChange);