import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSpace } from '../services/spaces';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Details from '../components/SpaceDetail/Details';

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
    <div>
      <Header />
      <Details details={space} />
      <Footer />
    </div>
  );
};

export default SpaceDetail;
