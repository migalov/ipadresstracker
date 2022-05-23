import './index.css';

const form = document.querySelector("form"),
  mainInputIP = form.querySelector("[name=main_input_ip]"),
  ipadress = form.querySelector("[name=ip_adress]"),
  location = form.querySelector("[name=location]"),
  timezone = form.querySelector("[name=timezone]"),
  isp = form.querySelector("[name=isp]"),
  API_KEY = "at_CGlNf4wvmaC6jgqrB3UA9GBwJj2nr",
  regexIP =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      URL = `https://geo.ipify.org/api/v1`;

const map = L.map("map");

const setMap = (lat, lng) => {
  map.setView([lat, lng], 13);

  const locationIcon = L.icon({
    iconUrl: "../src/assets/marker.svg",
    iconSize: [40, 50], // size of the icon
    iconAnchor: [20, 50], // point of the icon which will correspond to marker's location
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([lat, lng], { icon: locationIcon }).addTo(map);
};


const getDataFromIP = (_ip) => {
  let api_url = `${URL}?apiKey=${API_KEY}&ipAddress=${_ip}`;
  form.querySelectorAll(".app__show input").forEach((element) => (element.value = ""));
  fetch(api_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      ipadress.innerHTML = data.ip;
      location.innerHTML = `${data.location.country}, ${data.location.region}`;
      timezone.innerHTML = `UTC ${data.location.timezone}`;
      isp.innerHTML = data.isp;

      setMap(data.location.lat, data.location.lng);
    });
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  getDataFromIP(mainInputIP.value);
});


