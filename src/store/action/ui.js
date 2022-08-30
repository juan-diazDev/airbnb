import SET_ERROR from '../constants/ui';

const setError = (error) => ({ type: SET_ERROR, payload: error });

export default setError;
