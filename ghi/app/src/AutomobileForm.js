import React from 'react';


class AutomobileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            year: '',
            color:'',
            model_id: '',
            models: [],
            vin: '',
            successCreate: false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleInputChange(event) {
        const value = event.target.value;
        this.setState({[event.target.id]: value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.models;
        delete data.successCreate;
        
        const autoUrl = 'http://localhost:8100/api/automobiles/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(autoUrl, fetchConfig);
        
        if (response.ok) {
            const newAuto = await response.json();
            console.log(newAuto)
            const cleared = {
                year: '',
                color:'',
                model_id:'',
                models: [],
                vin: '',
                successCreate: true
            };
            this.setState(cleared);
        }
    } 

    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            this.setState({ models: data.models });
        }
    }

    
    render() {
        let successClassName = 'alert alert-success d-none mb-0 mt-5 text-center';
        let formClassName = '';
        if (this.state.successCreate) {
            successClassName = 'alert alert-success mb-0 mt-5 text-center';
            formClassName = 'd-none';
        }
        
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="text-center shadow p-4 mt-4">
                        <h1>Create An Automobile</h1>
                        <form className={formClassName} id="create-model-form" onSubmit={this.handleSubmit}>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleInputChange} value={this.state.year} 
                            placeholder="Year" required type="number" name="year" id="year" 
                            className="form-control"/>
                            <label htmlFor="year">Year</label>
                        </div>
                         <div className="form-floating mb-3">
                            <input onChange={this.handleInputChange} value={this.state.color} placeholder="Color" type="text" name="color" id="color" className="form-control" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="mb-3">
                            <select 
                            onChange={this.handleInputChange} value={this.state.model} 
                            required name="model_id" id="model_id" className="form-select">
                            <option value="">Choose a Model</option>
                            {this.state.models.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>
                                            {model.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={this.handleInputChange} value={this.state.vin} placeholder="Vin Number" type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">VIN</label>
                        </div>

                        <button className="btn btn-success">Create Automobile</button>
                        </form>
                        <div className={successClassName} id="success-message">
                            Automobile has been created.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AutomobileForm;
