import './cards.js';
import './form.js';
import './map.js';
import { secondaryMarkers } from './map.js';
import { serverRequest } from './fetch.js';

const OFFERS_COUNT = 10;

let pins = [];

const onSuccess = (data) => {
  pins = data.slice();
  secondaryMarkers(pins.slice(0, OFFERS_COUNT));
};

const onError = () => {
  alert('Произошла ошибка!');
};

serverRequest(onSuccess, onError, 'GET');
