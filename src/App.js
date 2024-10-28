import './App.css';
import Brand from './components/Brand';
import CTA from './components/CTA';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

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
