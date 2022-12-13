import React from 'react'
import { useState, useEffect } from 'react'

export default function SalesHistoryList() {
    const [salesrecords, setSalesRecords] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    console.log(salesrecords)
    const [employee_number, setEmployeeNumber] = useState([])

    const fetchSalesRecords = async () => {
        const url = 'http://localhost:8090/api/salesrecords/'
        const result = await fetch(url)
        const recordsJSON = await result.json()
        setSalesRecords(recordsJSON.salesrecords)
    }

    const fetchEmployeeNumber = async () => {
        const url = 'http://localhost:8090/api/salespersons/'
        const result = await fetch(url)
        const recordsJSON = await result.json()
        setEmployeeNumber(recordsJSON.salespersons.employee_number)
    }

    useEffect(() => {
        fetchEmployeeNumber()
    }, []);

    useEffect(() => {
        fetchSalesRecords()
    }, [])


    return (
        <div className="text-center shadow p-4 mt-4 col-md-offset-3">
                     <h1>Sales History</h1>
                     <input icon="search" type="text" className="search-input" aria-label="Default example" placeholder="Search employee #" onChange={(event) =>
                    {setSearchTerm(event.target.value)}}/>
                 <table className="table table-striped">
                     <thead>
                        <tr>
                        <th>Sales Person</th>
                        <th>Customer</th>
                        <th>Automobile</th>
                        <th>Price</th>
                         </tr>
                     </thead>
                     <tbody>
                         {salesrecords?.filter((salesrecord) => {
                            if (salesrecord.salesperson.includes(employee_number)) {
                                return salesrecord;
                            } else if (salesrecord.salesperson.includes(searchTerm)) {
                                return salesrecord;
                            }
                         }).map(salesrecord => {
                             return (
                                 <tr key={salesrecord.id}>
                                     <td>{salesrecord.salesperson}</td>
                                     <td>{salesrecord.customer}</td>
                                     <td>{salesrecord.automobile}</td>
                                     <td>{salesrecord.price}</td>
                                 </tr>
                             );
                         })}
                 </tbody>
                 </table>
             </div>
         )
     }
