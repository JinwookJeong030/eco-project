import client from './client';

export const readRanking = () => client.get(`/ranking`);

export const readMyRanking = user_id => client.get(`/myRanking/${user_id}`);

export const readCommuMember = commu_id => client.get(`/commuMember/${commu_id}`);

