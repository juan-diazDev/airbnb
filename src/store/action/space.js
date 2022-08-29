import { LOAD_SPACE_LIST, SET_SPACE_DETAIL } from '../constants/space';

export const loadSpaceList = (spaceList) => ({ type: LOAD_SPACE_LIST, payload: spaceList });
export const loadSpaceDetail = (spaceDetail) => ({ type: SET_SPACE_DETAIL, payload: spaceDetail });
// eslint-disable-next-line max-len
/* export const saveSpaceRegister = (spaceRegister) => ({ type: SET_SPACE_REGISTER, payload: spaceRegister });
 */
