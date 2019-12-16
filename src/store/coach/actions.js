import {
  COACH_LIST_INIT,
  COACH_LIST_SUCCESS,
  COACH_LIST_ERROR,
  COACH_CREATE_INIT,
  COACH_CREATE_SUCCESS,
  COACH_CREATE_ERROR,
  COACH_SELECTED
} from './types';

export const listInit = () => {
	return {
		type: COACH_LIST_INIT
	};
};

export const listSuccess = data => {
	return {
		type: COACH_LIST_SUCCESS,
		payload: { data }
	};
};

export const listError = error => {
	return {
		type: COACH_LIST_ERROR,
		payload: error
	};
};

export const createInit = () => {
	return {
		type: COACH_CREATE_INIT
	};
};

export const createSuccess = data => {
	return {
		type: COACH_CREATE_SUCCESS,
		payload: { data }
	};
};

export const createError = error => {
	return {
		type: COACH_CREATE_ERROR,
		payload: error
	};
};

export const coachSelected = id => {
	return {
		type: COACH_SELECTED,
		payload: id
	};
};
