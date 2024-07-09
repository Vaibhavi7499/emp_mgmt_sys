import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"Bodke"
    };
  }
//   AccessName=()=>{
// this.props.Demo()
//   }
  render() {
    return (
      <div>
        <h1>Child component</h1>
        <h1>Name:{this.props.name}</h1>
        <button onClick={()=>this.props.Demo("Bharat")}>Click</button>
        
      </div>
    );
  }
}

export default Child;
