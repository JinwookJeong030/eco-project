import client from './client';

export const readGrowPlant = user_id => client.get(`/plant/selectGrow/${user_id}`);
export const readCompletePlant = ({user_id, page}) => client.get(`/plant/selectComplete/${user_id}/${page}`);
export const deletePlant = pt_id => client.post(`/plant/delete`,pt_id);
export const pointUpPlant = ({growPlant, point})=> 
client.post(`/plant/point`, {growPlant, point});