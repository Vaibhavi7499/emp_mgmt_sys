import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
    name:"vaibhavi"
   }
   console.log("constructor phase")
 }
 static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps phase")
    return null
 }
 componentDidUpdate(){
    console.log("componentDidMount phase")
 }
 shouldComponentUpdate(){
    console.log("shouldComponentUpdate phase")
    return true
 }
 getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate phase")
    return null
 }
 Click=()=>{
    this.setState({
        name:"vaibhavi bodke"
    })
 }
    render() {
        console.log(this.state.name)
    return (
      <div>LifeCycleA
        <button onClick={this.Click}>click</button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA
