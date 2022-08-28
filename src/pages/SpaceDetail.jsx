import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSpace } from '../services/spaces';
import Details from '../components/SpaceDetail/Details';
import { loadSpaceDetail } from '../store/action/space';

const SpaceDetail = () => {
  // const [space, setSpace] = useState(null);
  const space = useSelector((state) => state.space.spaceDetail);
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSpace(_id);
      // setSpace(result);
      dispatch(loadSpaceDetail(result));
    };
    fetchData();
  }, []);

  return (
    <Details details={space} />
  );
};

export default SpaceDetail;
