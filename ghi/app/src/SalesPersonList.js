import React from 'react'


class SalesPersonList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salespersons: [],
        }
    }


    async componentDidMount() {
        const url = 'http://localhost:8090/api/salespersons'
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            this.setState({salespersons: data.salespersons})
        }
    }


    render() {

        return (

            <div className="text-center shadow p-4 mt-4 col-md-offset-3">

            <h1 className="text-center p-2 mt-2 col-md-offset-3">Salespersons</h1>
                    <table className="table table-striped mt-4">
                        <tbody>
                    {this.state.salespersons.map(salesperson => {
                        return (
                            <tr key={salesperson.id}>
                            <td>{salesperson.salesperson_name}</td>
                            <td>{salesperson.employee_number}</td>
                            </tr>
                        )
                    })}
                        </tbody>



                        </table>
                    </div>


        )
    }
}

export default SalesPersonList
