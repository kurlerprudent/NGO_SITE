import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import OurPrograms from './Pages/OurPrograms';
import ContactUs from './Pages/ContactUs';
import Donate from './Pages/Donate';
import GetInvolved from './Pages/GetInvolved';
import ErrorPage from './Pages/ErrorPage';
import './App.css'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourprograms" element={<OurPrograms />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
