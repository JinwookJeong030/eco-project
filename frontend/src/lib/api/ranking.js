import client from './client';

export const readRanking = ({ search_type, search_contents, page }) => client.get(`/ranking?page=${page}&search_type=${search_type}&search_contents=${search_contents}`);

export const readMyRanking = user_id => client.get(`/myRanking/${user_id}`);

export const readCommuMember = commu_id => client.get(`/commuMember/${commu_id}`);

