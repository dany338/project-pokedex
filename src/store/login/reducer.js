import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_TERMINATE
} from './types';

const initialState = {
  userLogin: '',
	isLoading: false,
	isLoggedIn: false,
  error: '',
};

const login = (state = initialState, { type, payload }) => {
  switch (type) {
		case LOGIN_INIT: {
			return {
				...state,
				error: '',
				isLoading: true,
      };
    }

		case LOGIN_SUCCESS: {
      const { username } = payload.data;
			return {
				...state,
				userLogin: username,
				isLoading: false,
				isLoggedIn: true,
			};
    }

		case LOGIN_ERROR: {
			return {
				...state,
				isLoading: false,
				isLoggedIn: false,
				error: payload,
      };
    }

		case LOGIN_TERMINATE: {
			return {
				...state,
				userLogin: '',
				isLoggedIn: false
      };
    }

		default: {
			return state;
		}
	}
};

export { login as default, initialState };
