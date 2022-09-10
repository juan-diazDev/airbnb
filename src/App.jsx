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
import GuestReservations from './components/GuestReservations/GuestReservations';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login-form" element={<Loginform />} />
    <Route path="/signup-form" element={<Signupform />} />
    <Route path="/space-detail/:_id" element={<SpaceDetail />} />
    <Route path="/account" element={<Account />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/property-type-group" element={<PropertyTypeGroup />} />
    <Route path="/privacy-type" element={<PrivacyType />} />
    <Route path="/location" element={<Location />} />
    <Route path="/floor-plan" element={<FloorPlan />} />
    <Route path="/amenities" element={<Amenities />} />
    <Route path="/images" element={<Images />} />
    <Route path="/title" element={<Title />} />
    <Route path="/description" element={<Description />} />
    <Route path="/price" element={<Price />} />
    <Route path="/preview" element={<Preview />} />
    <Route path="/verify-account/:token" element={<AccountVerfication />} />
    <Route path="/verify-account" element={<AccountVerfication />} />
    <Route path="/payments" element={<CheckoutCard />} />
    <Route path="/host-spaces-admin" element={<HostSpacesAdmin />} />
    <Route path="/host-home" element={<HostHome />} />
    <Route path="/profile/updatephoto" element={<UpdatePhoto />} />
    <Route path="/account/change-password" element={<ChangePassword />} />
    <Route path="/guest-booking" element={<GuestReservations />} />
  </Routes>
);

export default App;
