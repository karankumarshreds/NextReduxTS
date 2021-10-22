import React from 'react';
import { useDispatch } from 'react-redux';
import { getTodos, getComments } from '../redux/actions';

const PostsPage: React.FC = () => {
  const dispatch = useDispatch();
  const get = (thing: string) => {
    switch (thing) {
      case 'POSTS':
        return dispatch(getTodos());
      case 'COMMENTS':
        return dispatch(getComments());
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
