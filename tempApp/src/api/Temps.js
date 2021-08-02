import client from './client';

const endpoint = '/cputemp';

 const getTemps = () => client.get(endpoint);
 const getWeather = () => client.get();

 export default {
     getTemps,getWeather
 }

