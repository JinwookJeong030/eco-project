import client from './client';

export const readGrowPlant = user_id => client.get(`/plant/selectGrow/${user_id}`);
export const readCompletePlant = user_id => client.get(`/plant/selectComplete/${user_id}`);
export const deletePlant = pt_id => client.post(`/plant/delete`,pt_id);
export const pointUpPlant = ({pt_id, pt_point, point , plant_total_point})=> 
client.post(`/plant/point`, {pt_id, pt_point, point , plant_total_point});