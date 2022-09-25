import client from './client';
import qs from 'qs';

export const writePost = ({post_title, post_contents }) => client.post('/post/write',{post_title,post_contents});

export const readPost = id => client.get(`/post/view/${id}`);

export const listPosts = ({ page, username }) => {
    const queryString = qs.stringify({
      page,
      username
    });
    return client.get(`/post/list?${queryString}`);
  };