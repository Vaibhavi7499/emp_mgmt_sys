import { Component } from "react";

class ViewEmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
  render() {
    console.log(this.props.id)
    return (
      <div>
        <h1> Employee List</h1>
        <table class="table table-light">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Experience</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>{this.props.id}</td>
                <td>Vaibhavi</td>
                <td>Software Engineer</td>
                <td>2 Years</td>
                <td>
                    <button className="btn btn-success">edit</button>&nbsp;&nbsp;
                    <button className="btn btn-danger">delete</button>
                    </td>
            </tr>
          </tbody>
          
        </table>
      </div>
    );
  }
}
export default ViewEmp;
