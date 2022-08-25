import { LOAD_USER_LIST, SET_USER_DETAIL, SET_ERROR } from '../constants/user';

import { getUsers } from '../../services/users';

const setError = (error) => ({ type: SET_ERROR, payload: error });

export const loadUserList = (userList) => ({ type: LOAD_USER_LIST, payload: userList });
export const setUserDetail = (userDetail) => ({ type: SET_USER_DETAIL, payload: userDetail });

export const fetchuserList = () => async (dispatch) => {
  try {
    const userList = await getUsers();
    dispatch(loadUserList(userList));
  } catch (error) {
    dispatch(setError(error));
  }
};
