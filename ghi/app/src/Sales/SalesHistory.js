// import React from 'react'


// class SalesHistoryList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             salesperson: '',
//             salesrecords: [],
//         }
//     }


//     async componentDidMount() {
//         const url = 'http://localhost:8090/api/histories'
//         const response = await fetch(url)
//         if (response.ok) {
//             const data = await response.json()
//             this.setState({saleshistories: data.saleshistories})
//         }
//     }


//     render() {

//         return (

//             <div className="text-center shadow p-4 mt-4 col-md-offset-3">

//             <h1 className="text-center p-2 mt-2 col-md-offset-3">Sales </h1>
//                     <table className="table table-striped mt-4">
//                         <tbody>
//                     {this.state.saleshistories.map(saleshistory => {
//                         return (
//                             <tr key={salesperson.employee_number=salesperson.employee_number}>
//                             <td>{salesrecord.salesperson_name}</td>
//                             <td>{salesrecord.employee_number}</td>
//                             </tr>
//                         )
//                     })}
//                         </tbody>



//                         </table>
//                     </div>


//         )
//     }
// }

// export default SalesHistoryList
