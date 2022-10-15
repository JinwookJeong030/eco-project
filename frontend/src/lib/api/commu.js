import client from './client';
import qs from 'qs';


  export const readCommu = commu_id => client.get(`/commu/view/${commu_id}`);

  export const listCommus = ({ search_type, search_contents, page }) => {
    return client.get(`/commu/list?page=${page}&search_type=${search_type}&search_contents=${search_contents}`);//?${queryString}
  };
  export const listMyCommus= ({ page }) => {
    return client.get(`/commu/mylist?page=${page}`);//?${queryString}
};

  export const writeCommu = ({commu_name, commu_contents,commu_leader,commu_region }) => client.post('/commu/write',{commu_name, commu_contents,commu_leader,commu_region});

  export const editCommu  =({commu_id, commu_title, post_contents,post_category,post_mission}) => 
  client.post('/commu/edit',{commu_id, commu_title, post_contents,post_category,post_mission});

  export const deleteCommu  =commu_id => client.delete(`/commu/delete/${commu_id}`);



  export const listReplys = commu_id => client.get(`/commu/reply/list/${commu_id}`);
  export const writeReply = ({cr_post,cr_contents,cr_type}) => client.post(`/commu/reply/write`,{cr_post,cr_contents,cr_type});
  export const deleteReply = ({cr_id})=> client.delete('/commu/reply/delete',{cr_id});