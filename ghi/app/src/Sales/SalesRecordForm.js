import React from "react";

class SalesRecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      automobiles: [],
      salespersons: [],
      customers: [],
      price: "",
      vins: [],
      successCreate: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.id]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.automobiles;
    delete data.customers;
    delete data.salespersons;
    delete data.vins;
    delete data.successCreate;

    const SalesRecordUrl = "http://localhost:8090/api/salesrecords/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(SalesRecordUrl, fetchConfig);
    if (response.ok) {
      const newSalesRecord = await response.json();
      console.log(newSalesRecord);
      const cleared = {
        automobile: "",
        salesperson: "",
        customer: "",
        price: "",
        successCreate: true,
      };
      this.setState(cleared);
    }
  }

  async componentDidMount() {
    const autoUrl = "http://localhost:8100/api/automobiles/";
    const salesPersonUrl = "http://localhost:8090/api/salespersons/";
    const customerUrl = "http://localhost:8090/api/customers/";

    const salesPersonResponse = await fetch(salesPersonUrl);
    const customerResponse = await fetch(customerUrl);
    const autoResponse = await fetch(autoUrl);

    if (salesPersonResponse.ok) {
      const data = await salesPersonResponse.json();
      this.setState({ salespersons: data.salespersons });
    }

    if (customerResponse.ok) {
      const data = await customerResponse.json();
      this.setState({ customers: data.customers });
    }
    if (autoResponse.ok) {
      const automobileData = await autoResponse.json();
      const inventory = [];
      for (const auto of automobileData.autos) {
        if (!this.state.vins.includes(auto.vin)) {
          inventory.push(auto);
        }
      }
      this.setState({ automobiles: inventory });
    }
  }
  render() {
    let successClassName = "alert alert-success d-none mb-0 mt-5 text-center";
    let formClassName = "";
    if (this.state.successCreate) {
      successClassName = "alert alert-success mb-0 mt-5 text-center";
      formClassName = "d-none";
    }
<<<<<<< HEAD:ghi/app/src/SalesRecordForm.js
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="text-center shadow p-4 mt-4">
            <h1>Create a new sales record</h1>
            <form onSubmit={this.handleSubmit} id="create-sales-record-form">
              <div className="mb-3">
                <label htmlFor="automobile">Automobile</label>
                <select
                  onChange={this.handleInputChange}
                  value={this.state.automobile}
                  required
                  name="automobile"
                  id="automobile"
                  className="form-select"
                >
                  <option value="">Choose An Automobile</option>
                  {this.state.automobiles.map((automobile) => {
                    return (
                      <option key={automobile.vin} value={automobile.vin}>
                        {automobile.vin}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="salesperson">Salesperson</label>
                <select
                  onChange={this.handleInputChange}
                  value={this.state.salesperson}
                  required
                  name="salesperson"
                  id="salesperson"
                  className="form-select"
                >
                  <option value="">Choose A Salesperson</option>
                  {this.state.salespersons?.map((salesperson) => {
                    return (
                      <option
                        value={salesperson.employee_number}
                        key={salesperson.id}
                      >
                        {salesperson.salesperson_name}-
                        {salesperson.employee_number}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="customer">Customer</label>
                <select
                  onChange={this.handleInputChange}
                  value={this.state.customer}
                  required
                  name="customer"
                  id="customer"
                  className="form-select"
                >
                  <option value="">Choose A Customer</option>
                  {this.state.customers?.map((customer) => {
                    return (
                      <option value={customer.id} key={customer.id}>
                        {customer.customer_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="price">Price</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.price}
                  placeholder="Price"
                  required
                  type="number"
                  name="price"
                  id="price"
                  className="form-control currency"
                  data-symbol="$"
                />
                <label htmlFor="price"></label>
              </div>
              <button className="btn btn-success">Create</button>
            </form>
            <div className={successClassName} id="success-message">
              Sales record has been created.
=======


    async componentDidMount() {
        const url = 'http://localhost:8090/api/customers/'

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            this.setState({customers: data.customers})
        }
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/automobiles/'

        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            this.setState({automobiles: data.automobiles})
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
                            <input onChange={this.handleInputChange} value={this.state.customer}
                            placeholder="customer" required type="text" name="customer" id="customer"
                            className="form-control"/>
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleInputChange} value={this.state.salesperson}
                            placeholder="salesperson" required type="text" name="salesperson" id="salesperson"
                            className="form-control"/>
                            <label htmlFor="salesperson">Salesperson</label>
                        </div>
                        {/* <div className="mb-3">
                            <select
                            onChange={this.handleInputChange} value={this.state.customer}
                            required name="customer" id="customer" className="form-select">
                            <option value="">Choose A Customer</option>
                            {this.state.customers.map(customer => {
                                    return (
                                        <option key={customer.customer_name} value={customer.customer_name}>
                                            {customer.customer_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select
                            onChange={this.handleInputChange} value={this.state.salesperson}
                            required name="salesperson" id="salesperson" className="form-select">
                            <option value="">Choose A Salesperson</option>
                            {this.state.salespersons.map(salesperson => {
                                    return (
                                        <option key={salesperson.salesperson_name} value={salesperson.salesperson_name}>
                                            {salesperson.salesperson_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div> */}

                        <div className="mb-3">
                            <select
                            onChange={this.handleInputChange} value={this.state.automobile}
                            required name="automobile" id="automobile" className="form-select">
                            <option value="">Choose An Automobile</option>
                            {this.state.automobiles.map(automobile => {
                                    return (
                                        <option key={automobile.id} value={automobile.id}>
                                            {automobile.id}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>

                        {/* <div className="form-floating mb-3">
                            <input onChange={this.handleInputChange} value={this.state.automobile}
                            placeholder="automobile" required type="text" name="automobile" id="automobile"
                            className="form-control"/>
                            <label htmlFor="automobile">Automobile</label>
                        </div> */}

                        <div className="form-floating mb-3">
                            <input onChange={this.handleInputChange} value={this.state.price}
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
>>>>>>> main:ghi/app/src/Sales/SalesRecordForm.js
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SalesRecordForm;
