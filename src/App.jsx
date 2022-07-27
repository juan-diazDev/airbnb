import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loginform from './components/Log-In-form';
import Signupform from './components/Sign-up-form';
import SpaceDetail from './pages/SpaceDetail';
import FormContainerDescribe from './components/FormContainerDescribe';
import FormContainerCapacity from './components/FormContainerCapacity';
import FormContainerAdress from './components/FormContainerAdress';
import FormContainerFeatures from './components/FormContainerFeatures';
import FormContainerAdditions from './components/FormContainerAdditions';
import FormContainerImages from './components/FormContainerImages';
import FormContainerTitle from './components/FormContainerTitle';
import FormContainerDescriptionPlace from './components/FormContainerDescriptionPlace';
import FormContainerPrice from './components/FormContainerPrice';
import FormContainerType from './components/FormContainerType';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Loginform" element={<Loginform />} />
      <Route path="/Signupform" element={<Signupform />} />
      <Route path="/SpaceDetail" element={<SpaceDetail />} />
      <Route path="/FormContainerDescribe" element={<FormContainerDescribe />} />
      <Route path="/FormContainerCapacity" element={<FormContainerCapacity />} />
      <Route path="/FormContainerAdress" element={<FormContainerAdress />} />
      <Route path="/FormContainerFeatures" element={<FormContainerFeatures />} />
      <Route path="/FormContainerAdditions" element={<FormContainerAdditions />} />
      <Route path="/FormContainerImages" element={<FormContainerImages />} />
      <Route path="/FormContainerTitle" element={<FormContainerTitle />} />
      <Route path="/FormContainerDescriptionPlace" element={<FormContainerDescriptionPlace />} />
      <Route path="/FormContainerPrice" element={<FormContainerPrice />} />
      <Route path="/FormContainerType" element={<FormContainerType />} />
    </Routes>
  </BrowserRouter>
);

export default App;
