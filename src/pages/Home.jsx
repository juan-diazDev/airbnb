/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();
  const result = localStorage.getItem('profile');
  const profile = JSON.parse(result);

  const role = profile?.role;

  useEffect(() => {
    if (role) {
      navigate('/HostHome');
    }
  }, [role]);
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
};

export default Home;
