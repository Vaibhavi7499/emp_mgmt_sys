import { Component } from "react";

class ViewEmp extends Component {
  constructor(props) {
    super(props);
  }
  Delete(){

      
  
   
  }
  render() {
    console.log(this.props)
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
            {
              this.props.empList.length ? 
              this.props.empList.map((ele)=>(
                <tr>
                <td>{ele.id}</td>
                <td>{ele.employeeName}</td>
                <td>{ele.designation}</td>
                <td>{ele.experience}</td>
                <td>
                    <button className="btn btn-success">edit</button>&nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={this.Delete}>delete</button>
                    </td>
            </tr>
              )) :
              <h1>No record found</h1>
            }
           
          </tbody>
          
        </table>
      </div>
    );
  }
}
export default ViewEmp;
