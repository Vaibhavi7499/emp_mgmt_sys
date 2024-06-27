import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"Vaibhavi"
    };
  }
  Demo=(fname)=>{
alert(`My name is ${this.state.name} ${fname}`)
  }
  render() {
    return (
      <div>
        <h1>Parent component</h1>
        <Child name={this.state.name} Demo={this.Demo}/>
      </div>
    );
  }
}
export default Parent;
