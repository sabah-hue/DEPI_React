import './App.css';
import Navbar from './Components/Navbar.jsx/Navbar';
import HomeSection from './Components/HomeSection/HomeSection';
import Cards from './Components/Cards/Cards';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <HomeSection />
        <Cards /> 
      </div>   
    </>
  );
}

export default App;
