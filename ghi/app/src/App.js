import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobileList';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import ModelForm from './ModelForm';
import ModelList from "./ModelList";
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceAppointmentList from './ServiceAppointmentList';
import ServiceHistoryList from './ServiceHistoryList';
import TechnicianForm from './TechnicianForm';
import MainPage from './MainPage';
import Nav from './Nav';
import CustomerForm from './CustomerForm';
import SalesPersonForm from './SalesPersonForm';
import SalesRecordForm from './SalesRecordForm';
import SalesPersonList from './SalesPersonList';
import SalesRecordList from './SalesRecordList';
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
          <Route path="/automobiles" element={<AutomobileList />} />
          <Route path="/automobiles/new" element={<AutomobileForm />} />
          <Route path="/models/new" element={<ModelForm />} />
          <Route path="/models" element={<ModelList />} />
          <Route path="/appointments/new" element={<ServiceAppointmentForm />} />
          <Route path="/appointments/history" element={<ServiceHistoryList />} />
          <Route path="/appointments" element={<ServiceAppointmentList />} />
          <Route path="/customer/new" element={<CustomerForm />} />
          <Route path="/salesperson/new" element={<SalesPersonForm />} />
          <Route path="/salesrecord/new" element={<SalesRecordForm />} />
          <Route path="/salespersons/" element={<SalesPersonList />} />
          <Route path="/salesrecords/" element={<SalesRecordList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
