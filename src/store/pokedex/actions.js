import {
  POKEDEX_LIST_INIT,
  POKEDEX_LIST_SUCCESS,
  POKEDEX_LIST_ERROR,
  POKEDEX_SELECTED_INIT,
  POKEDEX_SELECTED_SUCCESS,
  POKEDEX_SELECTED_ERROR,
  POKEDEX_SELECTED
} from './types';

export const listInit = () => {
	return {
		type: POKEDEX_LIST_INIT
	};
};

export const listSuccess = data => {
	return {
		type: POKEDEX_LIST_SUCCESS,
		payload: { data }
	};
};

export const listError = error => {
	return {
		type: POKEDEX_LIST_ERROR,
		payload: error
	};
};

export const selectedInit = () => {
	return {
		type: POKEDEX_SELECTED_INIT
	};
};

export const selectedSuccess = data => {
	return {
		type: POKEDEX_SELECTED_SUCCESS,
		payload: { data }
	};
};

export const selectedError = error => {
	return {
		type: POKEDEX_SELECTED_ERROR,
		payload: error
	};
};

export const pokedexSelected = id => {
	return {
		type: POKEDEX_SELECTED,
		payload: id
	};
};
