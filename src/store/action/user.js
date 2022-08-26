import { LOAD_USER } from '../constants/user';

const loadUserDetail = (userDetail) => ({ type: LOAD_USER, payload: userDetail });

export default loadUserDetail;
