import React from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from '../../redux/actions';

const PostsPage: React.FC = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(getTodos());
  };
  return (
    <div>
      <h1>Posts Page</h1>
      <button onClick={() => onClick()}>GO FETCH</button>
    </div>
  );
};

export default PostsPage;
