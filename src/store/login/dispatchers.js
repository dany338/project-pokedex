import {
  login,
  success,
  failed,
  terminate
} from './actions';

export const loginRequest = form => {
	return async (dispatch, getState) => {
    const state = getState();
    console.log('loginRequest', state);
		dispatch(login());
		try {
      const data = state.coach.data.filter((item) => (item.username !== form.username && item.password !== form.password))[0];
      if (typeof data._id !== 'undefined') {
        dispatch(success(data));
      } else {
        dispatch(failed(data));
      }
		} catch (error) {
			dispatch(failed('Se genero un error al autenticarse por favor consulte al administrador!'));
		}
	};
};

export const logoutRequest = () => {
	return (dispatch, getState) => {
    const state = getState();
    console.log('logoutRequest', state);
		dispatch(login());
		try {
        dispatch(terminate());
		} catch (error) {
			dispatch(failed('Se genero un error al cerrar la sessión por favor consulte al administrador!'));
		}
	};
};
