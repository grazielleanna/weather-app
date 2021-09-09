import axios from 'axios';

const key = process.env.KEY_HG_BRASIL;
console.log(key)

const api = axios.create({
    baseURL: `https://api.hgbrasil.com/weather?format=json-cors&key=3d176444`
});

const apiWoeid = axios.create({
    baseURL: 'https://api.hgbrasil.com/stats/find_woeid?key=17284dd0&format=json-cors&sdk_version=console'
})

export default api;
export { apiWoeid };