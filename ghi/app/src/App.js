import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechnicianForm from './TechnicianForm';
import MainPage from './MainPage';
import Nav from './Nav';
<<<<<<< HEAD
// import CustomerForm from './CustomerForm';
// import SalesPersonForm from './SalesPersonForm';
// import SalesRecordForm from './SalesRecordForm';
// import SalesRecordList from './SalesRecordList';
// import SalesPersonSalesList from './SalesPersonSalesHistory';



=======
import './index.css';
>>>>>>> fecdaa953c8813524061ddb4cb4138523efd2457

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

