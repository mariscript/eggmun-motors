import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
// import CustomerForm from './CustomerForm';
// import SalesPersonForm from './SalesPersonForm';
// import SalesRecordForm from './SalesRecordForm';
// import SalesRecordList from './SalesRecordList';
// import SalesPersonSalesList from './SalesPersonSalesHistory';




function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
