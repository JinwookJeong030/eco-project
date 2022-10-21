import client from './client';

export const readPlant = user_id => client.get(`/plant/select/${user_id}`);


