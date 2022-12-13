import React from "react";
import { useState, useEffect } from "react";

export default function SalesHistoryList() {
  const [salesrecord, setSalesRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(salesrecord);
  const [employee_number, setEmployeeNumber] = useState([]);

  const fetchEmployeeNumber = async () => {
    const url = "http://localhost:8090/api/salesrecords/";
    const result = await fetch(url);
    const recordsJSON = await result.json();
    setEmployeeNumber(recordsJSON.salesrecords.employee_number);
  };

  useEffect(() => {
    fetchEmployeeNumber();
  }, []);

  return (
    <div className="row">
      <div className="mt-4">
        <h1>Sales History</h1>
        <input
          icon="search"
          type="text"
          className="search-input"
          aria-label="Default example"
          placeholder="Search Employee Number"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Employee Number</th>
              <th>Sales Person</th>
              <th>Customer</th>
              <th>Automobile</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sales?.filter((sale) => {
              if (salesrecord.employee_number.includes(employee_number)) {
                map((sale) => {
                  return (
                    <tr key={salesrecord.id}>
                      <td>{salesrecord.employee_number}</td>
                      <td>{salesrecord.salesperson.salesperson_name}</td>
                      <td>{salerecord.customer.customer_name}</td>
                      <td>{salesrecord.automobile.vin}</td>
                    </tr>
                  );
                });
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
