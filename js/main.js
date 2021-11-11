import './cards.js';
import './form.js';
import './map.js';
import './filter.js';
import { onChangeFilter } from './filter.js';
import { secondaryMarkers } from './map.js';
import { serverRequest } from './fetch.js';
import { serverErrorMessage } from './message.js';


const OFFERS_COUNT = 10;

let pins = [];

const onSuccess = (data) => {
  pins = data.slice(0, OFFERS_COUNT);
  secondaryMarkers(pins);
  onChangeFilter(data);
};

const onError = () => {
  serverErrorMessage();
};

serverRequest(onSuccess, onError, 'GET');

