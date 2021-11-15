import { createCard } from './cards.js';

const LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAIN_MARKER_SIZE = [52, 52];
const MAIN_MARKER_ANCHOR = [26, 52];
const SECONDARY_MARKER_SIZE = [40, 40];
const SECONDARY_MARKER_ANCHOR = [20, 40];
const ZOOM = 12;

const fields = document.querySelectorAll('fieldset, .map__filters-container > select');
const mapContainer = document.querySelector('#map-canvas');
const address = document.querySelector('#address');
const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
const map = L.map(mapContainer);
const layerGroup = L.layerGroup().addTo(map);

const cityCenter = {
  lat: 35.680838,
  lng: 139.767579,
};

const setFormState = () => {
  fields.forEach((item) => {
    item.disabled = !item.disabled;
  });

  adForm.classList.toggle('.ad-form--disabled');
  filterForm.classList.toggle('.map__filters--disabled');
};

map.on('load', () => {
  setFormState();
})
  .setView(cityCenter, ZOOM);
L.tileLayer(
  LAYER,
  {
    attribution: LAYER_ATTRIBUTION,
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: MAIN_MARKER_SIZE,
  iconAnchor: MAIN_MARKER_ANCHOR,
});

const mainMarker = L.marker(
  cityCenter, {
    draggable: true,
    icon: mainMarkerIcon,
  });

mainMarker.addTo(map);

const setAddress = ({ lat, lng }) => {
  address.value = `Точный адрес: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

setAddress(cityCenter);

mainMarker.on('moveend', (evt) => {
  setAddress(evt.target.getLatLng());
});

const secondaryIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: SECONDARY_MARKER_SIZE,
  iconAnchor: SECONDARY_MARKER_ANCHOR,
});

const removeMapPin = () => {
  layerGroup.clearLayers();
};

const secondaryMarkers = (data) => {
  data.forEach((offer) => {
    const marker = L.marker({
      lat: offer.location.lat,
      lng: offer.location.lng,
    }, {
      icon: secondaryIcon,
    });

    marker
      .addTo(layerGroup)
      .bindPopup(createCard(offer)),
    {
      keepInView: true,
    };
  });
};

const resetMapAndMarker = () => {
  mainMarker.setLatLng(cityCenter);
  setAddress(cityCenter);
  map.closePopup();
};

setFormState();

export { setAddress, resetMapAndMarker, secondaryMarkers, removeMapPin };
