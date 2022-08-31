/* eslint-disable no-undef */
import { getSpaces } from '../../services/spaces';
import { LOAD_SPACE_LIST, SET_SPACE_DETAIL, SPACE_QUERY } from '../constants/space';
import setError from './ui';

export const loadSpaceList = (spaceList) => ({ type: LOAD_SPACE_LIST, payload: spaceList });
export const loadSpaceDetail = (spaceDetail) => ({ type: SET_SPACE_DETAIL, payload: spaceDetail });
export const loadSpaceQuery = (spaceQuery) => ({ type: SPACE_QUERY, payload: spaceQuery });

export const fetchSpaceList = () => async (dispatch) => {
  try {
    const spaceList = await getSpaces();
    dispatch(loadSpaceList(spaceList));
  } catch (error) {
    dispatch(setError(error));
  }
};
