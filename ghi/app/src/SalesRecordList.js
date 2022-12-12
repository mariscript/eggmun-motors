import React from 'react'


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

            <h1 className="text-center p-2 mt-2 col-md-offset-3">Salesrecords</h1>
                    <table className="table table-striped mt-4">
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
