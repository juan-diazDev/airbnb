import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSpace } from '../services/spaces';
import Details from '../components/SpaceDetail/Details';

const SpaceDetail = () => {
  const [space, setSpace] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSpace(_id);
      setSpace(result);
    };

    fetchData();
  }, []);
  return (
    <Details details={space} />
  );
};

export default SpaceDetail;
