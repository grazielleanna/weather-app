import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
    baseURL: `https://api.hgbrasil.com/weather?format=json-cors&key=${process.env.REACT_APP_KEY_HG_BRASIL}`
});

const apiWoeid = axios.create({
    baseURL: `https://api.hgbrasil.com/stats/find_woeid?key=${process.env.REACT_APP_KEY_WEATHER}&format=json-cors&sdk_version=console`
});

const apiGeo = axios.create({
    baseURL: `https://api.hgbrasil.com/weather?format=json-cors&key=335f97fd&user_ip=remote`
});

api.interceptors.response.use(
    function(response){
        return response;
    },
    function(error){
        let html = JSON.stringify(error?.response?.data.message);
        Swal.fire({
            icon: error,
            title: `Error ${error?.response?.status}`,
            html
        });
    }
)

export default api;
export { apiWoeid, apiGeo };