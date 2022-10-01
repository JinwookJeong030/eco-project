import client from './client';
import qs from 'qs';


  export const readPost = post_id => client.get(`/post/view/${post_id}`);

  export const listPosts = ({ page, username }) => {
    const queryString = qs.stringify({
      page,
      username
    });
    return client.get(`/post/list?${queryString}`);
  };

  export const categorysPost =()=> client.get('/categorys');
  export const missionsPost =()=> client.get('/missions');

  export const writePost = ({post_title, post_contents,post_category, post_mission }) => client.post('/post/write',{post_title,post_contents,post_category, post_mission});

  export const editPost =({post_id, post_title, post_contents}) => client.post('/post/edit',{post_id, post_title, post_contents});

  export const deletePost =({post_id}) => client.delete(`/post/delete/${post_id}`);


  export const listReplys = post_id => client.get(`/reply/list/${post_id}`);
  export const writeReply = ({post_id,reply_contents,reply_type,reply_order, reply_group_id}) => client.post(`/reply/write`,{post_id,reply_contents,reply_type,reply_order, reply_group_id});