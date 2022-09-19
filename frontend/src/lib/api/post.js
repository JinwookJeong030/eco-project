import client from './client';
import qs from 'qs';

export const writePost = ({title, body }) => client.post('/post',{title,body});

export const readPost = id => client.get(`/post/${id}`);

export const listPosts = ({ page, username }) => {
    const queryString = qs.stringify({
      page,
      username
    });
    return client.get(`/posts?${queryString}`);
  };