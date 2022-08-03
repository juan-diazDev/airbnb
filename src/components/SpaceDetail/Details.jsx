import { useEffect, useState } from 'react';
import { getSpace } from '../../services/spaces';
import CheckOutCard from './CheckOutCard';

const Details = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSpace();
      setSpaces(result);
    };

    fetchData();
  }, []);
  return (
    <div>
      <CheckOutCard details={spaces} />
    </div>
  );
};

export default Details;
