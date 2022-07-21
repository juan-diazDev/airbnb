import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from './pages/Home';
import Signinform from './components/Sign-In-form';
import Loginform from "./components/Log-In-form"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/Signinform" element={ <Signinform />}/>
      <Route path="/Loginform" element={ <Loginform /> }/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
