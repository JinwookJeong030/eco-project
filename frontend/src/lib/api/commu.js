import client from './client';
import qs from 'qs';


  export const readCommu = commu_id => client.get(`/commu/view/${commu_id}`);

  export const listCommus = ({ search_type, search_contents, page }) => {
    return client.get(`/commu/list?search_type=${search_type}&search_contents=${search_contents}`);//?${queryString}
  };
  export const listMyCommus= ({ search_type, search_contents, page }) => {
    return client.get(`/commu/mylist?search_type=${search_type}&search_contents=${search_contents}`);//?${queryString}
};

  export const writeaCommu = ({commu_name, commu_contents,commu_leader,commu_region }) => client.post('/post/write',{commu_name, commu_contents,commu_leader,commu_region});

  export const editCommu  =({post_id, post_title, post_contents,post_category,post_mission}) => client.post('/post/edit',{post_id, post_title, post_contents,post_category,post_mission});

  export const deleteCommu  =post_id => client.delete(`/post/delete/${post_id}`);
  export const listReplys = post_id => client.get(`/reply/list/${post_id}`);
  export const writeReply = ({reply_post,reply_contents,reply_type,reply_order, reply_group_id}) => client.post(`/reply/write`,{reply_post,reply_contents,reply_type,reply_order, reply_group_id});
  export const deleteReply = ({reply_id})=> client.delete('/reply/delete',{reply_id});