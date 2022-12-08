// import React from 'react';

// class TechnicianForm extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             name: '',
//             employee_number: '',
//             create: false

//         }
//         this.handleInputChange = this.handleInputChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleInputChange(event) {
//         const value = event.target.value
//         this.setState({[event.target.id]: value})
//     }



//     async handleSubmit(event) {
//         event.preventDefault();
//         const data = {...this.state};
//         delete data.appointments;
//         delete data.create;

//         const TechUrl = 'http://localhost:8080/api/technicians/';
//         const fetchConfig = {
//             method: "post",
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };

//         const response = await fetch(TechUrl, fetchConfig);
//         if (response.ok) {
//             const newTech = await response.json();
//             console.log(newTech);
//             const cleared = {
//                 name: '',
//                 employee_number: '',
//                 create: true,
//             };
//             this.setState(cleared);
//         }
//     };



//     render() {
//         let createClassName = 'alert alert-success d-none mb-0 mt-5 text-center';
//         if (this.state.create) {
//             createClassName = 'alert alert-success mb-0 mt-5 text-center';
//         }

//         return (
//             <div className="row">
//             <div className="offset-3 col-6">
//              <img src="http://www.animated-gifs.fr/category_transportation/cars-repair/75975962.gif" className="img-fluid img-thumbnail"></img>
//             <div className="shadow p-4 mt-4">
//                 <h1>Add A New Shoe</h1>
//                 <form onSubmit={this.handleSubmit} id="create-tech-form">
//                 <div className="form-floating mb-3">
//                     <input onChange={this.handleInputChange} value={this.state.name}
//                     placeholder="Manufacturer" required type="text" name="name" id="name"
//                     className="form-control"/>
//                     <label htmlFor="manufacturer">Manufacturer</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                     <input onChange={this.handleInputChange} value={this.state.employee_number}
//                     placeholder="employee_number" required type="number" name="employee_number" id="employee_number"
//                     className="form-control"/>
//                     <label htmlFor="model_name">Enter Employee Number</label>
//                 </div>
//                 <button className="btn btn-info">Create Technician</button>
//                 </form>
//                 <div className={createClassName} id="success-message">
//                     Welcome to the team, {data.name}!
//                 </div>
//             </div>
//             </div>
//         </div>
//         );
//     }
// }

// export default TechnicianForm;



import React from 'react';


class TechnicianForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employee_number: '',
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
        
        const techUrl = 'http://localhost:8080/api/technicians/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(techUrl, fetchConfig);
        
        if (response.ok) {
            const newTechnician = await response.json();
            console.log(newTechnician)
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
                        <h1>Create a technician</h1>
                        <form className={formClassName} id="create-appointment-form" 
                        onSubmit={this.handleSubmit}>
                        <div className="form-floating mb-3">
                            <input 
                            onChange={this.handleInputChange} value={this.state.name} 
                            placeholder="name" required type="text" name="name" id="name" 
                            className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                            onChange={this.handleInputChange} value={this.state.employee_number} 
                            placeholder="employee_number" required type="number" max="32767"
                            name="employee_number" id="employee_number" 
                            className="form-control"/>
                            <label htmlFor="employee_number">Employee number</label>
                        </div>
                        <button className="btn btn-success">Create</button>
                        </form>
                        <div className={successClassName} id="success-message">
                            Technician has been created
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TechnicianForm;

