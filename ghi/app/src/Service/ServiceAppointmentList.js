import React from "react";
import { useState, useEffect } from "react";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const result = await fetch(url);
    const recordsJSON = await result.json();
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
