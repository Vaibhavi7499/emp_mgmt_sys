import { Component } from "react";
import ViewEmp from "./ViewEmp";

class AddEmp extends Component {
  constructor() {
    super();
    this.state ={
     empList:[ {Id: "",
      EmployeeName: "",
      Designation: "",
      Experience: "",
     }]
    };
  }
  ChangeId = (id) => {
    this.setState({
      Id: id.target.value,
    });
  };
  ChangeName = (name) => {
    this.setState({
      EmployeeName: name.target.value,
    });
  };
  ChangeDesignation = (designation) => {
    this.setState({
      Designation: designation.target.value,
    });
  };
  ChangeExperience = (experience) => {
    this.setState({
      Experience: experience.target.value,
    });
  };
  Submit = (event) => {
    event.preventDefault();
    console.log(this.state)
    console.log(event)
//     this.setState({
// empList:this.state.empList
//     },()=>{
//       console.log(this.state)
//     })
  };
  render() {
    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Employee
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Employee
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.Submit}>
                  <div className="form-group">
                    <label>Id</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.Id}
                      onChange={(e) => {
                        this.ChangeId(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Employee Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.EmployeeName}
                      onChange={(e) => {
                        this.ChangeName(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.Designation}
                      onChange={(e) => {
                        this.ChangeDesignation(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Experience</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.Experience}
                      onChange={(e) => {
                        this.ChangeExperience(e);
                      }}
                    />
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button className="btn btn-primary">Add Employee</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddEmp;
