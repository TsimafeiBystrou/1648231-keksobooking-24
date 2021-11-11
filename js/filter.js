import { clearMarkers, secondaryMarkers } from './map.js';
import { debounce } from './util.js';

const DEFAULT_FILTER_VALUE = 'any';

const filterForm = document.querySelector('.map__filters');
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');

const PriceValues = {
  LOW: 10000,
  HIGH: 50000,
};

const priceFilter = (offerPrice, filterValue) => {
  switch (filterValue) {
    case 'any': return true;
    case 'low': return offerPrice < PriceValues.LOW;
    case 'middle': return (PriceValues.LOW < offerPrice) && (offerPrice < PriceValues.HIGH);
    case 'high': return offerPrice > PriceValues.HIGH;
    default: return false;
  }
};

const valuesFilter = (offerValue, filterValue) => filterValue === DEFAULT_FILTER_VALUE ? true : String(offerValue) === String(filterValue);

const featuresFilter = (offerFeatrues) => {
  const choosenFeatures = filterForm.querySelectorAll('.map__checkbox:checked');
  let countEqualFeatures = 0;
  choosenFeatures.forEach((feature) => {
    if (offerFeatrues.includes(feature.value)) {
      countEqualFeatures += 1;
    }
  });

  return countEqualFeatures === choosenFeatures.length;
};

const filterComparing = (offer) =>
  valuesFilter(offer.offer.type, housingType.value) &&
  valuesFilter(offer.offer.rooms, housingRooms.value) &&
  valuesFilter(offer.offer.guests, housingGuests.value) &&
  priceFilter(offer.offer.price, housingPrice.value) &&
  featuresFilter(offer.offer.features ? offer.offer.features : []);


const filterRender = (offers) => {
  clearMarkers();
  secondaryMarkers(offers.filter((offer) => filterComparing(offer)));
};

const filterDebounce = debounce((offers) => filterRender(offers));

const onChangeFilter = (offers) => {
  filterForm.addEventListener('change', () => {
    filterDebounce(offers);
  });
};

export { onChangeFilter };
