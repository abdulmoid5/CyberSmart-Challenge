import {create} from 'apisauce';

const apiclient = create({
  // localhost not to be used as AVD cannot verify
  baseURL: 'http://172.20.10.2:3000/',
});

export default apiclient;
