import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHostSpaces } from '../../services/spaces';
import { loadSpaceDetail } from '../../store/action/space';
import { fetchUserDetail } from '../../store/action/user';
import CardSpaceOffert from './SpaceCard';
import Footer from '../Footer';
import './styles.scss';
import HostHeader from './HostHeader';

const HostHome = () => {
  const dispatch = useDispatch();

  const { _id } = useSelector((state) => state?.user?.userDetail);
  const spaces = useSelector((state) => state?.space?.spaceDetail);

  useEffect(() => {
    dispatch(fetchUserDetail());
    const fetchData = async () => {
      try {
        const space = await getHostSpaces(_id);
        dispatch(loadSpaceDetail(space));
      } catch (error) {
        console.log(error.message);
      }
    };
    if (_id) {
      fetchData();
    }
  }, [_id]);

  return (
    <>
      <HostHeader />
      <div className="host-home__main-containenr">
        <div className="card__title-container">
          <h1>My Spaces</h1>
        </div>
        {
          spaces?.map((space) => (
            <CardSpaceOffert space={space} key={space._id} />
          ))
        }
      </div>
      <Footer />
    </>
  );
};
export default HostHome;
