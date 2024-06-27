import React, { Component } from "react";
import styles from './student.module.css';
class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      physics: "",
      chemistry: "",
      biology: "",
      math: "",
      english: "",
      totalMarks: "",
      percentage:"",
      total:500,
      grade:"",
      isClick:false
    };
  }
  AccessPhysicsMarks(phy) {
    this.setState({
      physics: phy.target.value,
    });
  }
  AccessChemistryMarks(che) {
    this.setState({
      chemistry: che.target.value,
    });
  }
  AccessBiologyMarks(bio) {
    this.setState({
      biology: bio.target.value,
    });
  }
  AccessMathMarks(math) {
    this.setState({
      math: math.target.value,
    });
  }
  AccessEnglishMarks(eng) {
    this.setState({
      english: eng.target.value,
    });
  }

  Percentage = () => {
    let marks=Number(this.state.physics) +Number(this.state.chemistry) + Number(this.state.biology) + Number(this.state.math) + Number(this.state.english)
    let per=(marks / this.state.total )*100
    let grade;
    if(per <= 100 && per>=80){
      grade='A'
    }
    else if(per <=79 && per >=60){
      grade='B'
    }
    else if(per <=59 && per >=40){
      grade="C"
    }
    else{
      grade='F'
    }
    this.setState({
      totalMarks:marks,
      percentage:per,
      grade:grade,
      physics:"",     
       chemistry:"",
      biology:"",
      math:"",
      english:"",
      isClick:true
    });
               
  };
  render() {
    console.log(this.state.sum)
    return (
      <div>
        <h1> Student grade calculator</h1>
        <div className="subcontainer">
          <label>Enter Marks</label>
          <br></br>
          <label>Physics:</label>
          <input
            type="text"
            className="inpt1"
            value={this.state.physics}
            onChange={(e) => {
              this.AccessPhysicsMarks(e);
            }}
          ></input>
          <br></br>
          <label>Chemistry:</label>
          <input
            type="text"
            className="inpt2"
            value={this.state.chemistry}
            onChange={(e) => {
              this.AccessChemistryMarks(e);
            }}
          ></input>
          <br></br>
          <label>Biology:</label>
          <input
            type="text"
            className="inpt3"
            value={this.state.biology}
            onChange={(e) => {
              this.AccessBiologyMarks(e);
            }}
          ></input>
          <br></br>
          <label>Math:</label>
          <input
            type="text"
            className="inpt4"
            value={this.state.math}
            onChange={(e) => {
              this.AccessMathMarks(e);
            }}
          ></input>
          <br></br>
          <label>English:</label>
          <input
            type="text"
            className="inpt5"
            value={this.state.english}
            onChange={(e) => {
              this.AccessEnglishMarks(e);
            }}
          ></input>
          <br></br>
          <button className="btn1" onClick={this.Percentage}>
            show Percentage
          </button>
{
  this.state.isClick ? 
  <h3>Out of {this.state.total} your total marks is {this.state.totalMarks} and Percentage
            is {this.state.percentage}%.Your grade is {this.state.grade}. You are Pass
          </h3> :
          ""
}
          
        </div>

 
      </div>
    );
  }
}

export default Student;
