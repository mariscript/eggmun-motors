import React from "react";
import { useState, useEffect } from "react";

export default function ServiceHistoryList() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [vin, setVin] = useState([]);

  const fetchAppointments = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const result = await fetch(url);
    const recordsJSON = await result.json();
    setAppointments(recordsJSON.appointments);
  };

  const fetchVin = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const result = await fetch(url);
    const recordsJSON = await result.json();
    setVin(recordsJSON.appointments.vin);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    fetchVin();
  }, []);

  return (
    <div className="text-center shadow p-4 mt-4 col-md-offset-3">
      <div className="mt-4">
        <h1>Service History</h1>
        <input
          icon="search"
          type="text"
          className="search-input"
          aria-label="Default example"
          placeholder="Search VIN"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>VIN</th>
              <th>VIP</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason for Appointment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments
              ?.filter((appointment) => {
                if (appointment.vin.includes(vin)) {
                  return appointment;
                } else if (
                  appointment.vin
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return appointment;
                }
              })
              .map((appointment) => {
                return (
                  <tr key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.vip.toString()}</td>
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
                    {appointment.completed && <td>Completed</td>}
                    {!appointment.cancelled || <td>Cancelled</td>}
                    {!appointment.completed && <td>In Progress</td>}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
