import {
  listInit,
  listSuccess,
  listError,
  createInit,
  createSuccess,
  createError,
  coachSelected
} from './actions';

export const createCoachRequest = form => {
	return (dispatch, getState) => {
    const state = getState();
    console.log('createCoachRequest', state);
		dispatch(createInit());
		try {
      const data = form;
      if (typeof data._id !== 'undefined') {
        dispatch(createSuccess(data));
      } else {
        dispatch(createError(data));
      }
		} catch (error) {
			dispatch(createError('Se genero un error al guardar el entrenador favor consulte al administrador!'));
		}
	};
};

export const searchCoachRequest = () => {
	return (dispatch, getState) => {
    const state = getState();
    console.log('searchCoachRequest', state);
		dispatch(listInit());
		try {
      const data = state.coach.data;
      if (Array.isArray(data)) {
        dispatch(listSuccess(data));
      } else {
        dispatch(listError(data));
      }
		} catch (error) {
			dispatch(listError('Se genero un error al buscar los entrenadores por favor consulte al administrador!'));
		}
	};
};

export const selectedExpediente = id => {
  return (dispatch, getState) => {
    const state = getState();
    console.log('selectedExpediente', state);
    try {
      dispatch(coachSelected(id));
    } catch (error) {
			console.log(error);
		}
  };
};
