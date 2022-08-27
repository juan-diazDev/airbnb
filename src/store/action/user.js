import LOAD_USER from '../constants/user';
import { getUser } from '../../services/users';
import setError from './ui';

export const loadUserDetail = (userDetail) => ({ type: LOAD_USER, payload: userDetail });

export const fetchUserDetail = () => async (dispatch) => {
  try {
    const userDetail = await getUser();
    dispatch(loadUserDetail(userDetail));
  } catch (error) {
    dispatch(setError(error));
  }
};
