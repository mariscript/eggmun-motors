import React from 'react';

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_name : '',
            vin: '',
            date_time: '',
            reason: '',
            vip: '',
            technician: '',
            technicians: [],
            created: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeVin = this.handleChangeVin.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeReason = this.handleChangeReason.bind(this);
        this.handleChangeTech = this.handleChangeTech.bind(this);

        }



        handleChangeName(event) {
        const value = event.target.value;
        this.setState({ customer_name: value });
        }

        handleChangeVin(event) {
        const value = event.target.value;
        this.setState({ vin: value });
        }

        handleChangeTime(event) {
        const value = event.target.value;
        this.setState({ date_time: value });
        }

        handleChangeReason(event) {
        const value = event.target.value;
        this.setState({ reason: value });
        }

        handleChangeTech(event) {
        const value = event.target.value;
        this.setState({ technician: value });
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ technicians: data.technicians });
        }
        }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.technicians;
        delete data.created;

        const appointmentUrl = 'http://localhost:8080/api/appointments/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        console.log(response)
        if (response.ok){
            this.setState({
                customer_name: '',
                vin: '',
                date_time: '',
                reason: '',
                technician: '',
                vip: '',
                created: true,
            });
        }
    }



  render() {
    // let dropdownClasses = 'form-select d-none';
    // if (this.state.technicians.length > 0) {
    //   dropdownClasses = 'form-select';
    // }

    let messageClasses = 'alert alert-success d-none mb-0';
    let formClasses = '';
    if (this.state.created) {
      messageClasses = 'alert alert-success mb-0';
      formClasses = 'd-none';
    }

    return (
      <div className="my-5 container">
        <div className="row">
            <div className="col">
            <div className="offset-3 col-6">
                <div className="text-center shadow p-4 mt-4">
                <form className={formClasses} onSubmit={this.handleSubmit} id="create-appointment-form">
                    <h1>Make An Appointment</h1>
                    <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                        <input value={this.state.name} onChange={this.handleChangeName} required placeholder="Your Full Name" type="text" id="name" name="name" className="form-control" />
                        <label htmlFor="name">Your Full Name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                        <input value={this.state.vin} onChange={this.handleChangeVin} required placeholder="Your Vin Number" type="texy" maxLength="17" id="vin" name="vin" className="form-control" />
                        <label htmlFor="email">17-Digit Vin Number</label>
                        </div>
                        </div>
                        </div>
                    <div className="row">
                    <div className="col">
                         <div className="form-floating mb-3">
                            <input 
                            onChange={this.handleChangeTime} value={this.state.date_time} 
                            placeholder="Appointment Time" required type="datetime-local" name="date_time" id="date_time" 
                            className="form-control"/>
                            <label htmlFor="appointment_time">Appointment Date & Time</label>
                        </div>
                        </div>
                    <div className="col">
                    <div className="form-floating mb-3">
                            {/* <select 
                            onChange={this.handleChangeTech} value={this.state.technician} 
                            required name="technician" id="technician" className="form-select">
                            <option value="">Are You VIP?</option>
                            </select> */}
                        </div>
                        </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reason" className="form-label">Reason for Appointment</label>
                            <textarea 
                            onChange={this.handleChangeReason} value={this.state.reason} 
                            required type="text" name="reason" id="reason" 
                            className="form-control" rows="2"></textarea>
                        </div>
                        <div className="mb-3">
                            <select 
                            onChange={this.handleChangeTech} value={this.state.technician} 
                            required name="technician" id="technician" className="form-select">
                            <option value="">Choose a Technician</option>
                            {this.state.technicians.map(technician => {
                                    return (
                                        <option key={technician.name} value={technician.employee_number}>
                                            {technician.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                    <button className="btn btn-lg btn-primary">Make Appointment</button>
                        </form>
                        <div className={messageClasses} id="success-message">
                            You successfully made an appointment.
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default AppointmentForm;



// import React from 'react';


// class AppointmentForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         vin: '',
//         customer_name: '',
//         date_time: '',
//         reason: '',
//         vip: '',
//         technician: '',
//         technicians: [],
//         created: false,
//     };
//     this.handleVinChange = this.handleVinChange.bind(this);
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
//     this.handleReasonChange = this.handleReasonChange.bind(this);
//     this.handleVipChange = this.handleVipChange.bind(this);
//     this.handleStatusChange = this.handleStatusChange.bind(this);
//     this.handleTechChange = this.handleTechChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     const data = {...this.state};
//     delete data.technicians;

//     const appointmentUrl = 'http://localhost:8080/api/appointments/';
//     const fetchConfig = {
//         method: "post",
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     };
//     console.log("fetchConfig: ", fetchConfig);
//     const response = await fetch(appointmentUrl, fetchConfig);
//     if (response.ok) {
//       const newApp = await response.json();
//       console.log(newApp)
//       const cleared = {
//         vin: '',
//         customer_name: '',
//         date_time: '',
//         reason: '',
//         vip: '',
//         technician: '',
//         created: true,
//       };
//       this.setState(cleared);
//     }
//   }

//   handleVinChange(event) {
//     const value = event.target.value;
//     this.setState({vin: value})
//   }

//   handleNameChange(event) {
//     const value = event.target.value;
//     this.setState({customer: value})
//   }

//   handleDateTimeChange(event) {
//     const value = event.target.value;
//     this.setState({date_time: value})
//   }


//   handleReasonChange(event) {
//     const value = event.target.value;
//     this.setState({reason: value})
//   }

//   handleStatusChange(event) {
//     const value = event.target.value;
//     this.setState({status: value})
//   }

//   handleTechChange(event) {
//     const value = event.target.value;
//     this.setState({technician: value})
//   }

//   handleVipChange(event) {
//     const vip = event.target.value === 'true' ? true: false;
//     this.setState({ vip })

//   }


//     async componentDidMount() {
//         const url = 'http://localhost:8080/api/technicians/';

//         const response = await fetch(url);

//         if (response.ok) {
//             const data = await response.json();
//             this.setState({technicians: data.technicians});
//         }
//     }



//   render() {
//     // const { vip } = this.state;
//     // console.log(vip);
//     let messageClasses = 'alert alert-success d-none mb-0';
//     let formClasses = '';
//     if (this.state.created) {
//       messageClasses = 'alert alert-success mb-0';
//       formClasses = 'd-none';
//     }

//      return (
//       <div className="my-5 container">
//         <div className="row">
//             <div className="col">
//             <div className="offset-3 col-6">
//                 <div className="text-center shadow p-4 mt-4">
//                 <form className={formClasses} onSubmit={this.handleSubmit} id="create-appointment-form">
//                     <h1>Make An Appointment</h1>
//                     <div className="row">
//                     <div className="col">
//                         <div className="form-floating mb-3">
//                         <input value={this.state.name} onChange={this.handleNameChange} required placeholder="Your Full Name" type="text" id="name" name="name" className="form-control" />
//                         <label htmlFor="name">Your Full Name</label>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="form-floating mb-3">
//                         <input value={this.state.vin} onChange={this.handleVinChange} required placeholder="Your Vin Number" type="texy" maxLength="17" id="vin" name="vin" className="form-control" />
//                         <label htmlFor="email">17-Digit Vin Number</label>
//                         </div>
//                         </div>
//                         </div>
//                     <div className="row">
//                     <div className="col">
//                          <div className="form-floating mb-3">
//                             <input 
//                             onChange={this.handleDateTimeChange} value={this.state.date_time} 
//                             placeholder="Appointment Time" required type="datetime-local" name="date_time" id="date_time" 
//                             className="form-control"/>
//                             <label htmlFor="appointment_time">Date & Time</label>
//                         </div>
//                         </div>
//                     {/* <div className="col">
//                     <div className="form-floating mb-3">
//                             <div className="control">VIP?<br />
//                             <label className="radio">
//                             <input onChange={this.handleVipChange} checked={this.state.vip === "true"} value="true" type="radio" required name="vip" id="vip" />
//                             Yes
//                             </label>
//                             <div className="radio">
//                             <label>
//                             <input onChange={this.handleVipChange} checked={this.state.vip === "false"} value="false" type="radio" required name="vip" id="vip" />
//                             No
//                             </label>
//                             </div>
//                             </div>
//                         </div>
//                         </div> */}
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="reason" className="form-label">Reason for Appointment</label>
//                             <textarea 
//                             onChange={this.handleReasonChange} value={this.state.reason} 
//                             required type="text" name="reason" id="reason" 
//                             className="form-control" rows="2"></textarea>
//                         </div>
//                         <div className="mb-3">
//                             <select 
//                             onChange={this.handleTechChange} value={this.state.technician} 
//                             required name="technician" id="technician" className="form-select">
//                             <option value="">Choose a Technician</option>
//                             {this.state.technicians.map(technician => {
//                                     return (
//                                         <option key={technician.name} value={technician.employee_number}>
//                                             {technician.name}
//                                         </option>
//                                     );
//                                 })}
//                             </select>
//                         </div>

//                     <button className="btn btn-lg btn-primary">Make Appointment</button>
//                         </form>
//                         <div className={messageClasses} id="success-message">
//                             You successfully made an appointment.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AppointmentForm;

