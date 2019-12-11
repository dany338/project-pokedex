const initialState = {
  data: [],
  error: '',
  response: '',
  pokeSelected: '',
  isLoading: false,
  search: '',
};

const pokedex = (state = initialState, { type, payload }) => {
};

export { pokedex as default, initialState };
