import Client from './Client';

const endpoint = '/cputemp';

const getTemps = () => Client.get(endpoint);

export default {
  getTemps,
};
