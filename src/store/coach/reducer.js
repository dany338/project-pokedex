import {
  COACH_LIST_INIT,
  COACH_LIST_SUCCESS,
  COACH_LIST_ERROR,
  COACH_CREATE_INIT,
  COACH_CREATE_SUCCESS,
  COACH_CREATE_ERROR,
  COACH_SELECTED
} from './types';

const initialState = {
  data: [],
  error: '',
  response: '',
  coachSelected: '',
  isLoading: false,
};

const coach = (state = initialState, { type, payload }) => {
  switch (type) {
    case COACH_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case COACH_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    }

    case COACH_LIST_ERROR: {
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

    case COACH_SELECTED: {
			return {
				...state,
				coachSelected: {...state.data.filter((item) => item._id === payload)[0]},
      };
    }

    default: {
			return state;
		}
	}
};

export { coach as default, initialState };
