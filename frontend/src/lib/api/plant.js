import client from './client';

export const readPlant = () => client.get(`/plant`);


