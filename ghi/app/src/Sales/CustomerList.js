import React, { useState, useEffect } from "react";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
      method: "DELETE"
    });
    if (response.ok) {
      setCustomers(customers.filter(customer => customer.id !== id));
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  }

  // async function handleArchive(id) {
  // const response = await fetch(`http://localhost:8090/api/customer/${id}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     archived: true
  //   })
  // });
  // if (response.ok) {
  //   setCustomers(customers.map(customer => {
  //     if (customer.id === id) {
  //       return {
  //         ...customer,
  //         archived: true
  //       };
  //     } else {
  //       return customer;
  //     }
  //   }));
  //     setShowSuccessMessage(true);
  //     setTimeout(() => {
  //       setShowSuccessMessage(false);
  //     }, 3000);
  //   }
  // }


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
                  {/* <button
                    type="button"
                    className="btn btn-secondary ml-2"
                    onClick={() => handleArchive(customer.id)}
                  >
                    Archive
                  </button> */}
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
        {showSuccessMessage && <div className="alert alert-success">Customer deleted successfully.</div>}
      </div>
    </div>
  );
}




// import React, { useState, useEffect } from "react";

// export default function CustomerList() {
//   const [customers, setCustomers] = useState([]);
//   const [archivedCustomers, setArchivedCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   useEffect(() => {
//     async function fetchCustomers() {
//       const response = await fetch("http://localhost:8090/api/customers");
//       if (response.ok) {
//         const data = await response.json();
//         setCustomers(data.customers);
//         setLoading(false);
//       }
//     }
//     fetchCustomers();
//   }, []);

//   async function handleDelete(id) {
//     const response = await fetch(`http://localhost:8090/api/customer/${id}`, {
//       method: "DELETE"
//     });
//     if (response.ok) {
//       const deletedCustomer = customers.find(customer => customer.id === id);
//       setCustomers(customers.filter(customer => customer.id !== id));
//       setArchivedCustomers([...archivedCustomers, deletedCustomer]);
//       setShowSuccessMessage(true);
//       setTimeout(() => {
//         setShowSuccessMessage(false);
//       }, 3000);
//     }
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="text-center shadow p-4 mt-4 col-md-offset-3">
//       <div className="col-12">
//         <h1 className="text-center p-2 mt-2 col-md-offset-3">Customers</h1>
//          <table className="table table-striped mt-4">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Address</th>
//               <th>Phone Number</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.length > 0 ? (
//               customers?.map((customer) => (
//                 <tr key={customer.id}>
//                   <td>{customer.customer_name}</td>
//                   <td>{customer.address}</td>
//                   <td>{customer.phone_number}</td>
//                   <td>
//                     <button
//                       type="button"
//                       className="btn btn-danger mr-2"
//                       onClick={() => handleDelete(customer.id)}
//                     >
//                       Delete
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-secondary"
//                       onClick={() => {
//                         setArchivedCustomers([...archivedCustomers, customer]);
//                         setCustomers(customers.filter(c => c.id !== customer.id));
//                       }}
//                     >
//                       Archive
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4">No customers found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//         {showSuccessMessage && <div className="alert alert-success">Customer deleted successfully.</div>}
//       </div>
//       <div className="col-12">
//         <h1 className="text-center p-2 mt-2 col-md-offset-3">Archived Customers</h1>
//          <table className="table table-striped mt-4">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Address</th>
//               <th>Phone Number</th>
//             </tr>
//           </thead>
//           <tbody>
//             {archivedCustomers.length > 0 ? (
//               archivedCustomers?.map((customer) => (
//                 <tr key={customer.id}>
//                   <td>{customer.customer_name}</td>
//                   <td>{customer.address}</td>
//                   <td>{customer.phone_number}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3">No archived customers found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }