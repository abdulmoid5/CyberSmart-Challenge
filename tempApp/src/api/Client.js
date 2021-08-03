import {create} from 'apisauce';

const apiclient = create({
  // localhost not to be used as AVD cannot verify
  baseURL: 'http://localhost:3000/',
});

export default apiclient;
