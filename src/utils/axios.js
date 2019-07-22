import axios from 'axios';

axios.interceptors.request.use(function(config){
        return config;
},
function(error){
    return Promise.reject(error);
});
axios.interceptors.response.use(
    function(response){
        return response;
    },
    function(error){
        return Promise.reject(error);
    });

window.axios = axios;

export default axios;












