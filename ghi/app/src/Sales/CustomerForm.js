import React from "react";

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_name: "",
      address: "",
      phone_number: "",
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
    delete data.successCreate;

    const customersUrl = "http://localhost:8090/api/customers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(customersUrl, fetchConfig);

    if (response.ok) {
      const newCustomer = await response.json();
      console.log(newCustomer);
      const cleared = {
        customer_name: "",
        address: "",
        phone_number: "",
        successCreate: true,
      };
      this.setState(cleared);
    }
  }

  render() {
    let successClassName = "alert alert-success d-none mb-0 mt-5 text-center";
    let formClassName = "";
    if (this.state.successCreate) {
      successClassName = "alert alert-success mb-0 mt-5 text-center";
      formClassName = "d-none";
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="text-center shadow p-4 mt-4">
            <h1>Create A Customer</h1>
            <form
              className={formClassName}
              id="create-customer-form"
              onSubmit={this.handleSubmit}
            >
              <div className="form-floating-mb-3">
                <label htmlFor="customer_name">Customer Name</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.name}
                  placeholder="Customer Name"
                  required_type="text"
                  name="customer_name"
                  id="customer_name"
                  className="form-control"
                />
              </div>
              <label htmlFor="address">Address</label>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleInputChange}
                  value={this.state.address}
                  placeholder=""
                  required_type="text"
                  name="address"
                  id="address"
                  className="form-control"
                />
              </div>
              <div className="form-floating-mb-3">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.phone_number}
                  placeholder="Phone Number"
                  required_type="text"
                  name="phone_number"
                  id="phone_number"
                  className="form-control"
                />
              </div>
              <button className="btn btn-success">Create</button>
            </form>
            <div className={successClassName} id="success-message">
              Customer has been created
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerForm;
