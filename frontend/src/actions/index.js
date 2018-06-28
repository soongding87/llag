import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const res = await axios.post('/api/login');

  dispatch({ type: 'fetch_user', payload: res.data});
};
