import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

export const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);

  return response.data;
};
