import axios from 'axios';

const key = process.env.KEY_HG_BRASIL;
console.log(key)

const api = axios.create({
    baseURL: `https://api.hgbrasil.com/weather?format=json-cors&key=3d176444`
});

export default api;