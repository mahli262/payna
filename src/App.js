import './App.css';
import Brand from './Section/Brand';
import CTA from './Section/CTA';
import Features from './Section/Features';
import Footer from './Section/Footer';
import Hero from './Section/Hero';
import Navbar from './Section/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Brand/>
      <Features/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
