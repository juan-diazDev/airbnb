/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import { getHostSpaces, getSpaces } from '../../services/spaces';
import {
  LOAD_SPACE_LIST, SET_SPACE_DETAIL, FILTER_SPACE, LOAD_SPACE_LIST_BYHOSTID, DELETE_HOST_SPACE,
} from '../constants/space';
import setError from './ui';
import { getUser } from '../../services/users';

export const loadSpaceList = (spaceList) => ({ type: LOAD_SPACE_LIST, payload: spaceList });
export const loadHostSpaces = (spaceHostList) => ({ type: LOAD_SPACE_LIST_BYHOSTID, payload: spaceHostList });
export const loadSpaceDetail = (spaceDetail) => ({ type: SET_SPACE_DETAIL, payload: spaceDetail });
export const findSpace = (spaceQuery) => ({ type: FILTER_SPACE, payload: spaceQuery });
export const deleteHostSpace = (deleteSpace) => ({ type: DELETE_HOST_SPACE, payload: deleteSpace });
export const SpaceRegistation = () => ({ type: 'SET_SPACE_REGISTER', payload: { ...spaceRegister, propertyType } });

export const fetchSpaceList = () => async (dispatch) => {
  try {
    const spaceList = await getSpaces();
    dispatch(loadSpaceList(spaceList));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const fetchHostSpaceList = () => async (dispatch) => {
  try {
    const user = await getUser();
    console.log(user);
    const spaceHostList = await getHostSpaces(user._id);
    dispatch(loadHostSpaces(spaceHostList));
  } catch (error) {
    console.log(error);
    dispatch(setError(error));
  }
};

export const fetchIdToDelete = () => async (dispatch) => {
  try {
    const spaceByID = await deleteSpace(_id);
    console.log(spaceByID);
    dispatch(deleteHostSpace(spaceByID));
  } catch (error) {
    console.log(error);
    dispatch(setError(error));
  }
};
