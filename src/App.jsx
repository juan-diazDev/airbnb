import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Loginform from './components/Log-In-form/';
import Signupform from './components/Sign-up-form/';
import SpaceDetail from './pages/SpaceDetail';
import FormContainerDescribe from './components/FormContainerDescribe/index.jsx';
import FormContainerCapacity from './components/FormContainerCapacity/index.jsx';
import FormContainerAdress from './components/FormContainerAdress/index.jsx';
import FormContainerFeatures from './components/FormContainerFeatures/index.jsx';
import FormContainerAdditions from './components/FormContainerAdditions/index.jsx';
import FormContainerImages from './components/FormContainerImages/index.jsx';
import FormContainerTitle from './components/FormContainerTitle/index.jsx';
import FormContainerDescriptionPlace from './components/FormContainerDescriptionPlace/index.jsx';
import FormContainerPrice from './components/FormContainerPrice/index.jsx';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/Loginform" element={ <Loginform /> }/>
      <Route path="/Signupform" element={ <Signupform/> }/>
      <Route path='/SpaceDetail' element={<SpaceDetail /> }/>
      <Route path="/FormContainerDescribe" element= {<FormContainerDescribe/>}/>
      <Route path="/FormContainerCapacity" element={<FormContainerCapacity/>}/>
      <Route path="/FormContainerAdress" element={<FormContainerAdress/>}/>
      <Route path="/FormContainerFeatures" element={<FormContainerFeatures/>}/>
      <Route path="/FormContainerAdditions" element={<FormContainerAdditions/>}/>
      <Route path="/FormContainerImages" element={<FormContainerImages/>}/>
      <Route path="/FormContainerTitle" element={<FormContainerTitle/>}/>
      <Route path="/FormContainerDescriptionPlace" element={<FormContainerDescriptionPlace/>}/>
      <Route path="/FormContainerPrice" element={<FormContainerPrice/>}/> 
    </Routes>
   </BrowserRouter>
  );
}

export default App;
