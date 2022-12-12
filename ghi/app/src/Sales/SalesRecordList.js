import React from 'react'
// import { useState, useEffect } from 'react'



// export default function SalesRecordList() {

//     const [salesrecords, setSalesRecords] = useState([])


//     const fetchSalesRecords = async () => {
//         const url = 'http://localhost:8090/api/salesrecords/'
//         const result = await fetch(url)
//         const recordsJSON = await result.json()
//         console.log(recordsJSON)
//         setSalesRecords(recordsJSON.salesrecords)
//     }

//     const fetch

//     useEffect(() => {
//         fetchSalesRecords()
//     }, [])

//     useEffect(() => {
//         fetchVin()
//     }, [])


//     async function deleteSalesRecord(id) {
//         alert('Salesrecord deleted.')
//         const url = `http://localhost:8090/api/salesrecords/${id}/`;
//         const result = await fetch(url, { method: 'DELETE' });
//         if (result.ok) {
//             setSalesRecords(salesrecords.filter((salesrecord) => salesrecord.id !== id));
//         }
//     }

//     async function completeSalesRecord(id) {
//         const data = { completed: "True" }
//         const url = `http://localhost:8090/api/salesrecords/history`;
//         const fetchConfig = {
//             method: "PUT",
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };

//         const result = await fetch(url, fetchConfig);
//         if (result.ok) {
//             setSalesRecords(salesrecords.filter((salesrecord) => salesrecord.id !== id));
//         }


//     }

//     return (
//    <div className="text-center shadow p-4 mt-4 col-md-offset-3">
//                 <h1>Sales Records</h1>

//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>Sales Person</th>
//                         <th>Employee Number</th>
//                         <th>Customer</th>
//                         <th>Automobile</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {salesrecords?.filter((salesrecord) => {
//                         return (
//                             <tr key={salesrecord.id}>
//                                 <td>{salesrecord.salesperson.employee_number}</td>
//                                 <td>{salesrecord.salesperson.salesperson_name}</td>
//                                 <td>{salesrecord.customer.customer_name}</td>
//                                 <td>{salesrecord.automobile.vin}</td>
//                                 <td>{salesrecord.price}</td>

//                                 <td>
//                                     <button className="btn btn-danger" onClick={() => deleteSalesRecord(salesrecord.id)} type="button">Cancel</button>
//                                     <button className="btn btn-success" onClick={() => completeSalesRecord(salesrecord.id)} type="submit">Complete</button>
//                                 </td>

//                             </tr>
//                         )
//                     })}
//             </tbody>
//             </table>
//         </div>
//     )
// }












class SalesRecordList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salesrecords: [],
        }
    }


    async componentDidMount() {
        const url = 'http://localhost:8090/api/salesrecords'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            this.setState({salesrecords: data.salesrecords})
        }
    }


    render() {

        return (

            <div className="text-center shadow p-4 mt-4 col-md-offset-3">

            <h1 className="text-center p-2 mt-2 col-md-offset-3">Sales Records</h1>
                    <table className="table table-striped mt-4">
                        <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Customer</th>
                            <th>Automobile</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                    {this.state.salesrecords.map(salesrecord => {
                        return (
                            <tr key={salesrecord.id}>
                            <td>{salesrecord.salesperson}</td>
                            <td>{salesrecord.customer}</td>
                            <td>{salesrecord.automobile}</td>
                            <td>{salesrecord.price}</td>
                            </tr>
                        )
                    })}
                        </tbody>



                        </table>
                    </div>


        )
    }
}

export default SalesRecordList
