import React from 'react';


class AutomobileList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            autos: [],
        }
    }
    

    async componentDidMount() {
        const url = 'http://localhost:8100/api/automobiles/'
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                this.setState({autos: data.autos})
            }
    }

    
    render() {
        return (
            <div className="text-center shadow p-4 mt-4 col-md-offset-3">
            <h1 className="text-center p-2 mt-2 col-md-offset-3">Automobiles</h1>
                <table className="table table-striped mt-4">
                    <thead>
                    <tr>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>VIN</th>
                    </tr>
                    </thead>

                        <tbody>
                    {this.state.autos.map(auto => {
                        return (
                            <tr key={auto.id}>
                            <td>{auto.year}</td>
                            <td>{auto.color}</td>
                            <td>{auto.model.manufacturer.name}</td>
                            <td>{auto.model.name}</td>
                            <td>{auto.vin}</td>
                            </tr>
                        );
                    })}
                        </tbody>


                        
                        </table>
                    </div>


        );
    }
}

export default AutomobileList;
