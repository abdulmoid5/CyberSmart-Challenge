import {create} from 'apisauce';

const apiclient = create({
  baseURL: 'http://localhost:3000/',
  URL: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=d26a4bec9daa067c3885aae89574b2ba&units=metric',
});

export default apiclient;
