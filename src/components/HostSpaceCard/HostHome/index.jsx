import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getHostSpaces } from '../../../services/spaces';
import { loadSpaceDetail } from '../../../store/action/space';
import { fetchUserDetail } from '../../../store/action/user';
import Header from '../../Header';
// import CardSpaceOffert from '../SpaceCard';
import './styles.scss';

const HostHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { _id } = useSelector((state) => state?.user?.userDetail);
  const space = useSelector((state) => state?.space?.spaceDetail);
  console.log('Este son los spaces ->', space);

  const logOut = () => {
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    dispatch(fetchUserDetail());
    const fetchData = async () => {
      try {
        const spaces = await getHostSpaces(_id);
        dispatch(loadSpaceDetail(spaces));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Link to="/PropertyTypeGroup">
        <button type="button"> Create space</button>
      </Link>
      <Link to="/Loginform">
        <button type="button"> log in</button>
      </Link>
      <button onClick={logOut} type="button"> log out</button>
      {/* <CardSpaceOffert space={space} /> */}
    </div>
  );
};
export default HostHome;
