import client from './client';

const endpoint = '/cputemp';

 const getTemps = () => client.get(endpoint);

 export default {
     getTemps
 }

