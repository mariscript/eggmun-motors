import React from "react";


class ManufacturerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            createdManufacturer: false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const value = event.target.value
        this.setState({[event.target.id]: value})
    }

    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state}
        delete data.createdManufacturer

        const ManufacturerUrl = 'http://localhost:8100/api/manufacturers/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(ManufacturerUrl, fetchConfig)
        if (response.ok) {
            // eslint-disable-next-line
            const newManufacturer = await response.json()
            const cleared = {
                name: '',
                createdManufacturer: true
            }
            this.setState(cleared)
        }
    }


    render() {
        let messageClasses = 'alert alert-success p-2 mt-5 d-none mb-0';
        if (this.state.createdManufacturer) {
            messageClasses = 'alert alert-success mb-0';
        }
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="text-center shadow p-4 mt-4">
                <h1>Create a new manufacturer</h1>
                <form onSubmit={this.handleSubmit} id="create-manufacturer-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleInputChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                </div>
                <button className="btn btn-success">Submit</button>
                </form>
                <div className={messageClasses} id="success-message">
                    A new manufacturer has been added.
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default ManufacturerForm;
