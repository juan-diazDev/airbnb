import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from './pages/Home';
// import Loginform from './components/Log-In-form/'
// import Signupform from './components/Sign-up-form/'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      {/* <Route path="/Loginform" element={ <Loginform /> }/>
      <Route path="/Signupform" element={ <Signupform/> }/> */}
    </Routes>
   </BrowserRouter>
  );
}

export default App;
