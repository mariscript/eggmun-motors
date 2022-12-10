import React from 'react';


class ManufacturerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            manufacturers: [],
        }
    }
    

    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/'
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                this.setState({manufacturers: data.manufacturers})
            }
    }

    
    render() {
 
        return (

            <div className="text-center shadow p-4 mt-4 col-md-offset-3">

            <h1 className="text-center p-2 mt-2 col-md-offset-3">Manufacturers</h1>
                    <table className="table table-striped mt-4">
                        <tbody>
                    {this.state.manufacturers.map(manufacturer => {
                        return (
                            <tr key={manufacturer.id}>
                            <td>{manufacturer.name}</td>
                            </tr>
                        );
                    })}
                        </tbody>


                        
                        </table>
                    </div>


        );
    }
}

export default ManufacturerList;

