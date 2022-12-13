import { BrowserRouter, Routes, Route } from "react-router-dom";
import AutomobileForm from "./Inventory/AutomobileForm";
import AutomobileList from "./Inventory/AutomobileList";
import ManufacturerForm from "./Inventory/ManufacturerForm";
import ManufacturerList from "./Inventory/ManufacturerList";
import ModelForm from "./Inventory/ModelForm";
import ModelList from "./Inventory/ModelList";
import ServiceAppointmentForm from "./Service/ServiceAppointmentForm";
import ServiceAppointmentList from "./Service/ServiceAppointmentList";
import ServiceHistoryList from "./Service/ServiceHistoryList";
import TechnicianForm from "./Service/TechnicianForm";
import CustomerForm from "./Sales/CustomerForm";
import SalesPersonForm from "./Sales/SalesPersonForm";
import SalesRecordForm from "./Sales/SalesRecordForm";
import SalesPersonList from "./Sales/SalesPersonList";
import SalesRecordList from "./Sales/SalesRecordList";
import SalesHistoryList from "./Sales/SalesHistory";
import MainPage from "./MainPage";
import Nav from "./Nav";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturer/new" element={<ManufacturerForm />} />
          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/automobiles" element={<AutomobileList />} />
          <Route path="/automobiles/new" element={<AutomobileForm />} />
          <Route path="/models/new" element={<ModelForm />} />
          <Route path="/models" element={<ModelList />} />
          <Route
            path="/appointments/new"
            element={<ServiceAppointmentForm />}
          />
          <Route
            path="/appointments/history"
            element={<ServiceHistoryList />}
          />
          <Route path="/appointments" element={<ServiceAppointmentList />} />
          <Route path="/technician/new" element={<TechnicianForm />} />
          <Route path="/customer/new" element={<CustomerForm />} />
          <Route path="/salesperson/new" element={<SalesPersonForm />} />
          <Route path="/salesrecord/new" element={<SalesRecordForm />} />
          <Route path="/salespersons/" element={<SalesPersonList />} />
          <Route path="/salesrecords/" element={<SalesRecordList />} />
          <Route path="/saleshistory/" element={<SalesHistoryList />} />
<<<<<<< HEAD
=======
          <Route path="/salesperson/id" element={<SalesPersonForm />} />
>>>>>>> main
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
