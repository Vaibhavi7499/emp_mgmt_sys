import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
         name:"vaibhavi b"
        }
        console.log("constructorb phaseb")
      }
      static getDerivedStateFromProps(props,state){
         console.log("getDerivedStateFromProps phaseb")
         return null
      }
      componentDidUpdate(){
         console.log("componentDidMount phaseb")
      }
      shouldComponentUpdate(){
        console.log("shouldComponentUpdate phaseb")
        return true
     }
     getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate phaseb")
        return null
     }
  render() {
    return (
      <div>LifeCycleB

      </div>
    )
  }
}

export default LifeCycleB