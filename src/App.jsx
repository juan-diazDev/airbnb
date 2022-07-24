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

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/Loginform" element={ <Loginform /> }/>
      <Route path="/Signupform" element={ <Signupform/> }/>
      <Route path='/SpaceDetail' element={<SpaceDetail /> }/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
