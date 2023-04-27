import React, { useState, useEffect } from "react";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCustomers() {
      const response = await fetch("http://localhost:8090/api/customers");
      if (response.ok) {
        const data = await response.json();
        setCustomers(data.customers);
        setLoading(false);
      }
    }
    fetchCustomers();
  }, []);

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:8090/api/customer/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setCustomers(customers.filter((customer) => customer.id !== id));
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center shadow p-4 mt-4 col-md-offset-3">
      <div className="col-12">
        <h1 className="text-center p-2 mt-2 col-md-offset-3">Customers</h1>
         <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers?.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.customer_name}</td>
                  <td>{customer.address}</td>
                  <td>{customer.phone_number}</td>
                  <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(customer.id)}
                  >
                    Delete
                  </button>
                </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No customers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
