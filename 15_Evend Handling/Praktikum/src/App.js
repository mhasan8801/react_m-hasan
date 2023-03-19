import './App.css';
import Form from './components/Form';
import Hero from './components/Hero';
import Navbar from './components/navbar/Navbar';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Form />
      <Table />
    </div>
  );
}

export default App;
