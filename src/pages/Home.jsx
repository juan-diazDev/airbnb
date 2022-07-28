import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import { getSpace } from '../services/spaces';

const Home = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSpace();
      setSpaces(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <MainSection list={spaces} />
      <Footer />
    </>
  );
};

export default Home;
