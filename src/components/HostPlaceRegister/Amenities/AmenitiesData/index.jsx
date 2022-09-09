import Bathroom from './Bathroom';
import BedroomAndLaundry from './BedroomAndLaundry';
import Entertaiment from './Entertaiment';
import Facilities from './Facilities';
import Kitchen from './Kitchen';
import './styles.scss';

const AmenitiesData = () => (
  <main className="amenities__main-container">
    <Kitchen />
    <Bathroom />
    <Facilities />
    <BedroomAndLaundry />
    <Entertaiment />
  </main>
);

export default AmenitiesData;
