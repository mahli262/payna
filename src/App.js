import './App.css';
import Navbar from './Components/Navbar';
import Brand from './Section/Brand';
import CTA from './Section/CTA';
import Features from './Section/Features';
import Hero from './Section/Hero';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Brand/>
      <Features/>
      <CTA/>
    </div>
  );
}

export default App;
