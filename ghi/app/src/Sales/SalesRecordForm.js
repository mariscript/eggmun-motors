import React, { useState, useEffect } from "react";

function SalesRecordForm() {
  const [state, setState] = useState({
    automobile: "",
    salesperson: "",
    customer: "",
    price: "",
    vins: [],
    successCreate: false,
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    setState((prevState) => ({ ...prevState, [event.target.id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...state };
    delete data.automobiles;
    delete data.customers;
    delete data.salespersons;
    delete data.vins;
    delete data.successCreate;

    const SalesRecordUrl = "http://localhost:8090/api/salesrecords/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(SalesRecordUrl, fetchConfig);
    if (response.ok) {
      const cleared = {
        automobile: "",
        salesperson: "",
        customer: "",
        price: "",
        successCreate: true,
      };
      setState(cleared);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const autoUrl = "http://localhost:8100/api/automobiles/";
      const salesPersonUrl = "http://localhost:8090/api/salespersons/";
      const customerUrl = "http://localhost:8090/api/customers/";

      const [salesPersonResponse, customerResponse, autoResponse] =
        await Promise.all([
          fetch(salesPersonUrl),
          fetch(customerUrl),
          fetch(autoUrl),
        ]);

      if (salesPersonResponse.ok) {
        const data = await salesPersonResponse.json();
        setState((prevState) => ({
          ...prevState,
          salespersons: data.salespersons,
        }));
      }

      if (customerResponse.ok) {
        const data = await customerResponse.json();
        setState((prevState) => ({
          ...prevState,
          customers: data.customers,
        }));
      }
      if (autoResponse.ok) {
        const automobileData = await autoResponse.json();
        const inventory = [];
        for (const auto of automobileData.autos) {
          if (!state.vins.includes(auto.vin)) {
            inventory.push(auto);
          }
        }
        setState((prevState) => ({
          ...prevState,
          automobiles: inventory,
        }));
      }
    };
    fetchData();
  }, []);

  let successClassName = "alert alert-success d-none mb-0 mt-5 text-center";
  let formClassName = "";
  if (state.successCreate) {
    successClassName = "alert alert-success mb-0 mt-5 text-center";
    formClassName = "d-none";
  }
    return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="text-center shadow p-4 mt-4">
          <h1>Create A New Sales Record</h1>
          <form onSubmit={handleSubmit} id="create-sales-record-form">
            <div className="mb-3">
              <label htmlFor="automobile" className="mb-2">
                Automobile
              </label>
              <select
                onChange={handleInputChange}
                value={state.automobile}
                required
                name="automobile"
                id="automobile"
                className="form-select"
              >
                <option value="">Choose An Automobile</option>
                {state.automobiles?.map((automobile) => {
                  return (
                    <option key={automobile.vin} value={automobile.vin}>
                      {automobile.year} {automobile.color}{" "}
                      {automobile.model.manufacturer.name}{" "}
                      {automobile.model.name} {automobile.vin}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="salesperson" className="mb-2">
                Salesperson
              </label>
              <select
                onChange={handleInputChange}
                value={state.salesperson}
                required
                name="salesperson"
                id="salesperson"
                className="form-select"
              >
                <option value="">Choose A Salesperson</option>
                {state.salespersons?.map((salesperson) => {
                  return (
                    <option
                      value={salesperson.employee_number}
                      key={salesperson.id}
                    >
                      {salesperson.salesperson_name}-
                      {salesperson.employee_number}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="customer" className="mb-2">
                Customer
              </label>
              <select
                onChange={handleInputChange}
                value={state.customer}
                required
                name="customer"
                id="customer"
                className="form-select"
              >
                <option value="">Choose A Customer</option>
                {state.customers?.map((customer) => {
                  return (
                    <option value={customer.id} key={customer.id}>
                      {customer.customer_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="mb-2">
                Price
              </label>
              <input
                onChange={handleInputChange}
                value={state.price}
                placeholder="Price"
                required
                type="number"
                name="price"
                id="price"
                className="form-control currency"
                data-symbol="$"
              />
              <label htmlFor="price"></label>
            </div>
            <button className="btn btn-success">Create</button>
            </form>
            <div className={successClassName} id="success-message">
              Sales record has been created.
            </div>
          </div>
        </div>
      </div>
    );
  }


export default SalesRecordForm;
