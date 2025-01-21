import './App.css';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import HomeSection from './Components/HomeSection/HomeSection';
import Slider from './Components/Slider/Slider';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavbarComponent />
      <Routes>
          <Route index element={<Slider />} />
          <Route path="slider" element={< HomeSection/>} />
          <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
