import React from 'react';
import { useActions } from '../redux';

const PostsPage: React.FC = () => {
  const { getComments, getTodos } = useActions();
  const get = (thing: string) => {
    switch (thing) {
      case 'POSTS':
        return getTodos();
      case 'COMMENTS':
        return getComments();
      default:
        return;
    }
  };
  return (
    <div>
      <h1>Posts Page</h1>
      <button onClick={() => get('POSTS')}>GO FETCH POSTS</button>
      <button onClick={() => get('COMMENTS')}>GO FETCH COMMENTS</button>
    </div>
  );
};

export default PostsPage;
