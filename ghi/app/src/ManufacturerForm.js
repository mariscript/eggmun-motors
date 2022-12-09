import React from 'react';


class ManufacturerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
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
        delete data.successCreate;
        
        const techUrl = 'http://localhost:8100/api/manufacturers/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(techUrl, fetchConfig);
        
        if (response.ok) {
            const newManufacturer = await response.json();
            console.log(newManufacturer)
            const cleared = {
                name: '',
                employee_number: '',
                successCreate: true,
            };
            this.setState(cleared);
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
                        <h1>Create A Manufacturer</h1>
                        <form className={formClassName} id="create-manufacturer-form" 
                        onSubmit={this.handleSubmit}>
                        <div className="form-floating mb-3">
                            <input 
                            onChange={this.handleInputChange} value={this.state.name} 
                            placeholder="name" required type="text" name="name" id="name" 
                            className="form-control"/>
                            <label htmlFor="name">Manufacturer Name</label>
                        </div>
                        <button className="btn btn-success">Create</button>
                        </form>
                        <div className={successClassName} id="success-message">
                            Manufacturer has been created.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManufacturerForm;

