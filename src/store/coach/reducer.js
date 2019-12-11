const initialState = {
  data: [],
  error: '',
  response: '',
  coachSelected: '',
  isLoading: false,
};

const coach = (state = initialState, { type, payload }) => {
};

export { coach as default, initialState };
