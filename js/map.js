import { setFormState } from "./form.js";
import { createCard } from "./cards.js";
import { similarOffers } from "./data.js";

const mapContainer = document.querySelector('#map-canvas');
const address = document.querySelector('#address');

const cityCenter = {
  lat: 35.680838,
  lng: 139.767579,
};

const map = L.map(mapContainer);
map.on('load', () => {
  setFormState();
})
  .setView(cityCenter, 12);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker (
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
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const secondaryMarker = (data) => {
  data.forEach((offer) => {
    const marker = L.marker({
      lat: offer.location.lat,
      lng: offer.location.lng,
    }, {
      icon: secondaryIcon,
    });

    marker
      .addTo(map)
      .bindPopup(createCard(offer)),
    {
      keepInView: true,
    };
  });
};

secondaryMarker(similarOffers());
