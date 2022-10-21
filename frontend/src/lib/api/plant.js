import client from './client';

export const readGrowPlant = user_id => client.get(`/plant/selectGrow/${user_id}`);
export const readCompletePlant = user_id => client.get(`/plant/selectComplete/${user_id}`);

