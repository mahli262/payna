import './App.css';
import Navbar from './Components/Navbar';
import Brand from './Section/Brand';
import Features from './Section/Features';
import Hero from './Section/Hero';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Brand/>
      <Features/>
    </div>
  );
}

export default App;
