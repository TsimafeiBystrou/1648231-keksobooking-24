// import './cards.js';
// import './form.js';
// import './map.js';
// import { secondaryMarkers } from './map.js';

import { secondaryMarkers } from './map.js';
import { getData } from './fetch.js';
const OFFERS_COUNT = 10;

getData((ads) => {
  secondaryMarkers(ads.slice(0, OFFERS_COUNT));
});



