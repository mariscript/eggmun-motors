import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechnicianForm from './TechnicianForm';
import MainPage from './MainPage';
import Nav from './Nav';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technician/new" element={<TechnicianForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

