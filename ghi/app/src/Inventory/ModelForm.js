import React from 'react';


class ModelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            picture_url:'',
            manufacturers: [],
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
        delete data.manufacturers;
        delete data.successCreate;
        
        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(modelUrl, fetchConfig);
        
        if (response.ok) {
            const newModel = await response.json();
            const cleared = {
                name: '',
                picture_url: '',
                manufacturer: '',
                successCreate: true,
            };
            this.setState(cleared);
        }
    } 

    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ manufacturers: data.manufacturers });
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
                        <h1>Create A Model</h1>
                        <form className={formClassName} id="create-model-form" onSubmit={this.handleSubmit}>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleInputChange} value={this.state.name} 
                            placeholder="name" required type="text" name="name" id="name" 
                            className="form-control"/>
                            <label htmlFor="name">Model Name</label>
                        </div>
                         <div className="form-floating mb-3">
                            <input onChange={this.handleInputChange} value={this.state.picture_url} placeholder="picture_url" type="text" name="picture_url" id="picture_url" className="form-control" />
                            <label htmlFor="picture_url">Picture</label>
                        </div>
                        <div className="mb-3">
                                <select onChange={this.handleInputChange} value={this.state.manufacturer} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                                    <option value="manufacturer_id">Choose A Manufacturer</option>
                                    {this.state.manufacturers.map(manufacturer => {
                                        return (
                                            <option key={manufacturer.id} value={manufacturer.id}>
                                            {manufacturer.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                        <button className="btn btn-success">Create</button>
                        </form>
                        <div className={successClassName} id="success-message">
                            Model has been created.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModelForm;
