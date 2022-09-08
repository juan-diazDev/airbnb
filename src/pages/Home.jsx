/* eslint-disable react/jsx-no-useless-fragment */
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import HostEditSpace from '../components/HostSpaceCard/HostEditSpace';

const Home = () => {
  const result = localStorage.getItem('profile');
  const profile = JSON.parse(result);

  const { role } = profile;
  return (
    <>
      {
        role === 'HOST'
          ? <HostEditSpace />
          : (
            <>
              <Header />
              <MainSection />
              <Footer />
            </>
          )
      }
    </>
  );
};

export default Home;
