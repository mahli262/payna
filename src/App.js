import './App.css';
import Brand from './components/Brand';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand/>
      <Features/>
    </div>
  );
}

export default App;
