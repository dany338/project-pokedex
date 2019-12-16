import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_TERMINATE
} from './types';

export const login = () => {
	return {
		type: LOGIN_INIT
	};
};

export const success = data => {
	return {
		type: LOGIN_SUCCESS,
		payload: { data }
	};
};

export const failed = error => {
	return {
		type: LOGIN_ERROR,
		payload: error
	};
};

export const terminate = () => {
	return {
		type: LOGIN_TERMINATE
	};
};
