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

export const apiPoke = {
  getPokes: async () => {
    try {
      const response = await fetch(`${URL_API}${endpoints.poke.list}`, fetchParams('GET'));
      if (typeof response.ok === 'undefined') {
        console.log(response.status_message);
      }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        console.log(data.error);
      }
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};

export default apiPoke;
