import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Home from './pages/Home';
import Quotes from './pages/quote';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
