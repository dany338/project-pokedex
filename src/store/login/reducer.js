const initialState = {
  userLogin: '',
  token: '',
	isLoading: false,
	isLoggedIn: false,
  error: '',
  response: '',
};

const login = (state = initialState, { type, payload }) => {
};

export { login as default, initialState };
