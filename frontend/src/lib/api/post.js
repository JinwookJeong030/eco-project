import client from './client';
import qs from 'qs';


  export const readPost = post_id => client.get(`/post/view/${post_id}`);

  export const listPosts = ({ search_type, search_contents, page }) => {
    const queryString = qs.stringify({
      page, 
      search_type,
      search_contents,
    });
    console.log(queryString)
    return client.get(`/post/list?search_type=${search_type}&search_contents=${search_contents}`);//?${queryString}
  };

  export const categorysPost =()=> client.get('/categorys');
  export const missionsPost =()=> client.get('/missions');

  export const writePost = ({post_title, post_contents,post_category, post_mission }) => client.post('/post/write',{post_title,post_contents,post_category, post_mission});

  export const editPost =({post_id, post_title, post_contents,post_category,post_mission}) => client.post('/post/edit',{post_id, post_title, post_contents,post_category,post_mission});

  export const deletePost =post_id => client.delete(`/post/delete/${post_id}`);

  export const searchPosts =(({search_type , search_contents}) => client.get(`/post/list?search_type=${search_type}&search_contents=${search_contents}`));



  export const listReplys = post_id => client.get(`/reply/list/${post_id}`);
  export const writeReply = ({reply_post,reply_contents,reply_type,reply_order, reply_group_id}) => client.post(`/reply/write`,{reply_post,reply_contents,reply_type,reply_order, reply_group_id});
  export const deleteReply = ({reply_id})=> client.delete('/reply/delete',{reply_id});