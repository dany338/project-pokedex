/* Defined Constants */
import { POKE_URL_API as URL_API } from '../config/const';
/* Defined Endpoints */
import endpoints from '../config/endpoints';
let apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: '',
};

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  return {
    method,
    headers: apiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

export const apiPokedex = {
  getPokes: async () => {
    try {
      const response = await fetch(`${URL_API}${endpoints.poke.list}`, fetchParams('GET'));
      if (!response.ok || response.status === 403 || response.status === 404 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  },
  getById: async id => {
    try {
      const response = await fetch(`${URL_API}${endpoints.poke.getById}/${id}`, fetchParams('GET'));
      if (!response.ok || response.status === 403 || response.status === 404 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        return data.error;
      }
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default apiPokedex;
