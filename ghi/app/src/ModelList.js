import React from 'react';


class ModelList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            models: [],
        }
    }
    

    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/'
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                this.setState({models: data.models})
            }
    }

    
    render() {
 
        return (

            <div className="text-center shadow p-4 mt-4 col-md-offset-3">

            <h1 className="text-center p-2 mt-2 col-md-offset-3">Models</h1>
                    <table className="table table-striped mt-4">
                        <tbody>
                    {this.state.models.map(model => {
                        return (
                            <tr key={model.id}>
                            <td>{model.name}</td>
                            </tr>
                        );
                    })}
                        </tbody>


                        
                        </table>
                    </div>


        );
    }
}

export default ModelList;

