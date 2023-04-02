import './App.css';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
