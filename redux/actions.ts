import axios from 'axios';

export const getTodos = () => async (dispatch: any) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  dispatch({
    type: 'GET_TODOS',
    payload: data,
  });
};

export const getComments = () => async (dispatch: any) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments/1');
  dispatch({
    type: 'GET_COMMENTS',
    payload: data,
  });
};
