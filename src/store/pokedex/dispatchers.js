import {
  listInit,
  listSuccess,
  listError,
  selectedInit,
  selectedSuccess,
  selectedError,
  pokedexSelected
} from './actions';
import * as PokedexServices from "../../services";

export const listPokedexRequest = values => {
	return async (dispatch, getState) => {
    const state = getState();
    console.log('listPokedexRequest', state);
		dispatch(listInit());
		try {
      const data = await PokedexServices.apiPokedex.getPokes(values);
      if (Array.isArray(data)) {
        dispatch(listSuccess(data));
      } else {
        dispatch(listError(data));
      }
		} catch (error) {
			dispatch(listError('Se genero un error al listar los expedientes por favor consulte al administrador!'));
		}
	};
};

export const getbyidPokedexRequest = id => {
	return async (dispatch, getState) => {
    const state = getState();
    console.log('getbyidPokedexRequest', state);
		dispatch(selectedInit());
		try {
      const data = await PokedexServices.apiPokedex.getById(id);
      if (typeof data._id !== 'undefined') {
        dispatch(selectedSuccess(data));
      } else {
        dispatch(selectedError(data));
      }
		} catch (error) {
			dispatch(selectedError('Se genero un error al obtener el detalle por favor consulte al administrador!'));
		}
	};
};

export const selectedExpediente = id => {
  return (dispatch, getState) => {
    const state = getState();
    console.log('selectedExpediente', state);
    try {
      dispatch(pokedexSelected(id));
    } catch (error) {
			console.log(error);
		}
  };
};
