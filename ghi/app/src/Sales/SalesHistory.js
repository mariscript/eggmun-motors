import React from "react";

class SalesHistoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
    };
  }

  async componentDidMount() {
    const url = "http://localhost:8090/api/salesrecords";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ sales: data.sales });
    }
  }

  render() {
    return (
      <div className="text-center shadow p-4 mt-4 col-md-offset-3">
        <h1 className="text-center p-2 mt-2 col-md-offset-3">Sales History</h1>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>Sales Person</th>
              <th>Customer</th>
              <th>Automobile</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sales?.map((salesrecord) => {
              return (
                <tr key={salesrecord.id}>
                  <td>
                    <a href="/salesrecords/id">{salesrecord.salesperson}</a>
                  </td>
                  <td>{salesrecord.customer}</td>
                  <td>{salesrecord.automobile}</td>
                  <td>{salesrecord.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SalesHistoryList;
