import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loginform from './components/Log-In-form';
import Signupform from './components/Sign-up-form';
import SpaceDetail from './pages/SpaceDetail';
import Account from './pages/Account';
import ProfilePage from './components/ProfilePage';
import PropertyTypeGroup from './components/HostPlaceRegister/PropertyTypeGroup';
import PrivacyType from './components/HostPlaceRegister/PrivacyType';
import Location from './components/HostPlaceRegister/Location';
import FloorPlan from './components/HostPlaceRegister/FloorPlan';
import Amenities from './components/HostPlaceRegister/Amenities';
import Images from './components/HostPlaceRegister/Images';
import Title from './components/HostPlaceRegister/Title';
import Description from './components/HostPlaceRegister/Description';
import Price from './components/HostPlaceRegister/Price';
import Preview from './components/HostPlaceRegister/Preview';
import AccountVerfication from './pages/VerifyAccount/index';
import CheckoutCard from './pages/CheckoutCard';
import HostSpacesAdmin from './pages/HostSpacesAdmin';
import HostHome from './components/HostSpaceCard';
import UpdatePhoto from './components/ProfilePage/UploadPhoto';
import ChangePassword from './components/AccountPage/ChangePassword';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Loginform" element={<Loginform />} />
    <Route path="/Signupform" element={<Signupform />} />
    <Route path="/SpaceDetail/:_id" element={<SpaceDetail />} />
    <Route path="/Account" element={<Account />} />
    <Route path="/Profile" element={<ProfilePage />} />
    <Route path="/PropertyTypeGroup" element={<PropertyTypeGroup />} />
    <Route path="/PrivacyType" element={<PrivacyType />} />
    <Route path="/Location" element={<Location />} />
    <Route path="/FloorPLan" element={<FloorPlan />} />
    <Route path="/Amenities" element={<Amenities />} />
    <Route path="/Images" element={<Images />} />
    <Route path="/Title" element={<Title />} />
    <Route path="/Description" element={<Description />} />
    <Route path="/Price" element={<Price />} />
    <Route path="/Preview" element={<Preview />} />
    <Route path="/verifyAccount/:token" element={<AccountVerfication />} />
    <Route path="/verifyAccount" element={<AccountVerfication />} />
    <Route path="/Payments" element={<CheckoutCard />} />
    <Route path="/HostSpacesAdmin" element={<HostSpacesAdmin />} />
    <Route path="/HostHome" element={<HostHome />} />
    <Route path="/Profile/Updatephoto" element={<UpdatePhoto />} />
    <Route path="/Account/ChangePassword" element={<ChangePassword />} />
  </Routes>
);

export default App;
