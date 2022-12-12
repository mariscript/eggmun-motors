import React from 'react'


class SalesRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            salesperson: '',
            salespersons: [],
            customer: '',
            customers: [],
            automobile: '',
            automobiles: [],
            price: '',
            successCreate: false
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
        delete data.salespersons
        delete data.customers
        delete data.successCreate

        const salesRecordUrl = 'http://localhost:8090/api/salesrecords'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(salesRecordUrl, fetchConfig)
        if (response.ok) {
            const cleared = {
                salesperson: '',
                customer: '',
                automobile: '',
                price: '',
                successCreate: true,
            }
            this.setState(cleared)
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


    async componenetDidMount() {
        const url = 'http://localhost:8090/api/customers'

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            this.setState({customers: data.customers})
        }
    }


    render() {
        let successClassName = 'alert alert-success d-none mb-0 mt-5 text-center'
        let formClassName = ''
        if (this.state.successCreate) {
            successClassName = 'alert alert-success mb-0 mt-5 text-center'
            formClassName = 'd-none'
        }

        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="text-center shadow p-4 mt-4">
                        <h1>Create A Sales Record</h1>
                        <form className={formClassName} id="create-salesrecord-form"
                        onSubmit={this.handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                            onChange={this.handleInputChange} value={this.state.salesperson}
                            placeholder="salesperson" required type="text" name="salesperson" id="salesperson"
                            className="form-control"/>
                            <label htmlFor="salesperson">Salesperson</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            onChange={this.handleInputChange} value={this.state.customer}
                            placeholder="customer" required type="text" name="customer" id="customer"
                            className="form-control"/>
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            onChange={this.handleInputChange} value={this.state.automobile}
                            placeholder="automobile" required type="text" name="automobile" id="automobile"
                            className="form-control"/>
                            <label htmlFor="automobile">Automobile</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                            onChange={this.handleInputChange} value={this.state.price}
                            placeholder="price" required type="number" name="price" id="price"
                            className="form-control"/>
                            <label htmlFor="price">Price</label>
                        </div>
                            <button className="btn btn-success">Create</button>
                        </form>
                        <div className={successClassName} id="success-message">
                            Sales record has been created
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SalesRecordForm
