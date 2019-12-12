import {
  POKEDEX_LIST_INIT,
  POKEDEX_LIST_SUCCESS,
  POKEDEX_LIST_ERROR,
  POKEDEX_SELECTED,
  POKEDEX_SELECTED_INIT,
  POKEDEX_SELECTED_SUCCESS,
  POKEDEX_SELECTED_ERROR
} from './types';

const initialState = {
  data: [],
  error: '',
  response: '',
  pokeSelected: '',
  isLoading: false,
  search: '',
};

const pokedex = (state = initialState, { type, payload }) => {
  switch (type) {
    case POKEDEX_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case POKEDEX_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    }

    case POKEDEX_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case COACH_CREATE_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case COACH_CREATE_SUCCESS: {
      return {
        ...state,
        data: [payload.data, ...state.data],
        isLoading: false,
        coachSelected: '',
      };
    }

    case COACH_CREATE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case POKEDEX_SELECTED: {
			return {
				...state,
				pokeSelected: {...state.data.filter((item) => item._id === payload)[0]},
      };
    }

    case POKEDEX_SELECTED_INIT: {
			return {
				...state,
        error: '',
				isLoading: true,
      };
    }

		case POKEDEX_SELECTED_SUCCESS: {
			return {
				...state,
				pokeSelected: payload.data,
				isLoading: false,
			};
    }

		case POKEDEX_SELECTED_ERROR: {
			return {
				...state,
				isLoading: false,
				error: payload,
      };
    }

    default: {
			return state;
		}
	}
};

export { pokedex as default, initialState };
