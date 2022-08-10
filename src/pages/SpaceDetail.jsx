import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSpace } from '../services/spaces';
import GridLayOut from '../components/SpaceDetail/GridLayOut';

const SpaceDetail = () => {
  const [space, setSpace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSpace(id);
      setSpace(result);
    };

    fetchData();
  }, []);
  return (
    <GridLayOut details={space} />
  );
};

export default SpaceDetail;
