import React from "react";
import { useState, useEffect } from "react";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const result = await fetch(url);
    const recordsJSON = await result.json();
    console.log(recordsJSON);
    setAppointments(recordsJSON.appointments);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  async function deleteAppointment(id) {
    alert("This appointment is now cancelled.");
    const url = `http://localhost:8080/api/appointments/${id}/`;
    const result = await fetch(url, { method: "DELETE" });
    if (result.ok) {
      setAppointments(
        appointments.filter((appointment) => appointment.id !== id)
      );
    }
  }

  // const completed = async (event) => {
  //     const value = event.currentTarget.id;
  //     const completedUrl = `http://localhost:8080/api/appointments/${value}`;
  //     const fetchConfig = {
  //         method: "PUT",
  //         // body: JSON.stringify({ completed: true }),
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //     };
  //     const result = await fetch(completedUrl, fetchConfig);
  //     if (result.ok) {
  //         console.log("Success")
  //     }
  //     else {
  //         console.log("Failed")
  //     }

  async function completeAppointment(id) {
    const completedUrl = `http://localhost:8080/api/appointments/${id}`;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify({ completed: true }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await fetch(completedUrl, fetchConfig);
    if (result.ok) {
      fetchAppointments();
    }
  }

  return (
    <div className="text-center shadow p-4 mt-4 col-md-offset-3">
      <h1>Service Appointments</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>VIP?</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {appointments
            .filter((appointment) => appointment.completed !== true)
            .map((appointment) => {
              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.customer_name}</td>
                  <td>
                    {new Date(appointment.date_time).toLocaleDateString()}
                  </td>
                  <td>
                    {new Date(appointment.date_time).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td>{appointment.technician.name}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.vip.toString()}</td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAppointment(appointment.id)}
                      type="button"
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => completeAppointment(appointment.id)}
                      value={appointment.completed}
                    >
                      Complete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

// import { React, useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// function AppointmentList() {
//     const [appointments, setAppointments] = useState(null)

//     useEffect(() => {
//         fetch('http://localhost:8080/api/appointments/')
//             .then(response => {
//                 return response.json()
//             })
//             .then(data => {
//                 const uncompleted = data.appointments.filter(appointment => appointment.completed === false)
//                 setAppointments(uncompleted)
//             })
//     }, [])

//     const handleFinished = (appointment) => {
//         const appointmentsUrl = `http://localhost:8080/api/appointments/history/${appointment.id}`
//         appointment.completed = true
//         const requestOptions = {
//             method: "PUT",
//             body: JSON.stringify(appointment),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }
//         fetch(appointmentsUrl, requestOptions)
//             .then(response => {
//                 if (response.ok) {
//                     window.alert("Appointment was listed as finished.")
//                     setAppointments(appointments.filter(appointment => appointment.completed === false))
//                 } else {
//                     window.alert("Something went wrong. Appointment was not completed.")
//                 }
//             }
//             )
//     }

//     const handleCancel = (appointment) => {
//         const cancelUrl = `http://localhost:8080/api/appointments/${appointment.id}`
//         const requestOptions = {
//             method: "DELETE",
//             body: JSON.stringify(appointment),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }
//         fetch(cancelUrl, requestOptions)
//             .then(response => {
//                 return response.json()
//             })
//             .then(remainingAppointments => {
//                 if (remainingAppointments) {
//                     window.alert("Appointment was canceled")
//                     setAppointments(remainingAppointments.filter(appointment => appointment.completed === false))
//                 } else {
//                     window.alert("Something went wrong. Appointment was not cancelled.")
//                 }
//             })
//     }

//     return (
//         <>
//             {appointments &&
//                 <div>
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>VIP</th>
//                                 <th>VIN</th>
//                                 <th>Customer Name</th>
//                                 <th>Date</th>
//                                 <th>Time</th>
//                                 <th>Technician</th>
//                                 <th>Reason For Visit</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {appointments.map(appointment => {
//                                 if (appointment.vip === true) {
//                                     return (
//                                         <tr key={appointment.id}>
//                                             <th scope="row">VIP</th>
//                                             <td>
//                                                 <Link to={`/appointments/history/`}>{appointment.vin}</Link>
//                                             </td>
//                                             <td>{appointment.customer_name}</td>
//                                             <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
//                                             <td>{new Date(appointment.date_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
//                                             <td>{appointment.technician.name}</td>
//                                             <td>{appointment.reason}</td>
//                                             <td>
//                                                 <button type="button" className="btn btn-success"
//                                                     onClick={() => { handleFinished(appointment) }}>Completed</button>
//                                             </td>
//                                             <td>
//                                                 <button type="button" className="btn btn-danger"
//                                                     onClick={() => { handleCancel(appointment) }}>Cancel</button>
//                                             </td>
//                                         </tr>
//                                     )
//                                 } else {
//                                     return (
//                                         <tr key={appointment.id}>
//                                             <th scope="row"></th>
//                                             <td>
//                                                 <Link to={`/appointments/history/`}>{appointment.vin}</Link>
//                                             </td>
//                                             <td>{appointment.customer_name}</td>
//                                             <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
//                                             <td>{new Date(appointment.date_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
//                                             <td>{appointment.technician.name}</td>
//                                             <td>{appointment.reason}</td>
//                                             <td>
//                                                 <button type="button" className="btn btn-success"
//                                                     onClick={() => { handleFinished(appointment) }}>Completed</button>
//                                             </td>
//                                             <td>
//                                                 <button type="button" className="btn btn-danger"
//                                                     onClick={() => { handleCancel(appointment) }}>Cancel</button>
//                                             </td>
//                                         </tr>
//                                     )
//                                 }
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             }
//         </>
//     )
// }
// export default AppointmentList
