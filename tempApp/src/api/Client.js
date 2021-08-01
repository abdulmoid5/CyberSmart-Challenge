import {create} from 'apisauce';

const apiclient = create({
  baseURL: 'http://localhost:3000/',
});

export default apiclient;
