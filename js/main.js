import './cards.js';
import './form.js';
import './map.js';
import './filter.js';
import { filterData } from './filter.js';
import { secondaryMarkers, removeMapPin } from './map.js';
import { serverRequest } from './fetch.js';
import { serverErrorMessage } from './message.js';
import { debounce } from './util.js';

const OFFERS_COUNT = 10;
const filterForm = document.querySelector('.map__filters');

let pins = [];

const onMapFiltersChange = debounce(() => {
  removeMapPin();
  secondaryMarkers(filterData(pins));
});

const onSuccess = (data) => {
  pins = data.slice();
  secondaryMarkers(pins.slice(0, OFFERS_COUNT));
  filterForm.addEventListener('change', onMapFiltersChange);
};

const onError = () => {
  serverErrorMessage();
};

serverRequest(onSuccess, onError, 'GET');
