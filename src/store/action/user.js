import { LOAD_USER } from '../constants/user';

// import { getUser } from '../../services/users';

// const setError = (error) => ({ type: SET_ERROR, payload: error });

const loadUserDetail = (userDetail) => ({ type: LOAD_USER, payload: userDetail });

// export const fetchuserList = () => async (dispatch) => {
//   try {
//     const userDetail = await getUser();
//     dispatch(loadUserDetail(userDetail));
//   } catch (error) {
//     dispatch(setError(error));
//   }
// };

export default loadUserDetail;
