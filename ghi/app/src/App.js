import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import ModelForm from './ModelForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import TechnicianForm from './TechnicianForm';
import MainPage from './MainPage';
import Nav from './Nav';
// import CustomerForm from './CustomerForm';
// import SalesPersonForm from './SalesPersonForm';
// import SalesRecordForm from './SalesRecordForm';
// import SalesRecordList from './SalesRecordList';
// import SalesPersonSalesList from './SalesPersonSalesHistory';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technician/new" element={<TechnicianForm />} />
          <Route path="/manufacturer/new" element={<ManufacturerForm />} />
          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/models" element={<ModelForm />} />
          <Route path="/appointments/new" element={<ServiceAppointmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

