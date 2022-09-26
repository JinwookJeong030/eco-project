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

  export const writePost = ({post_title, post_contents }) => client.post('/post/write',{post_title,post_contents});

  export const editPost =({post_id, post_title, post_contents}) => client.post('post/edit',{post_id, post_title, post_contents});

  export const deletePost =({post_id}) => client.delete(`/post/delete/${post_id}`);