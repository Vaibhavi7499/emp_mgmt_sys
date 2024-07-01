import React, { Component } from 'react'
import ChildA from './ChildA'

class ParentA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"vaibhavi",
         a:""
      }
    }
    getId=(id)=>{
//console.log(id)
this.setState({
    a:id
})
    }
  render() {
    return (
      <div>
        ParentA
<ChildA name={this.state.name} id={this.getId}/>
<h2>{this.state.a}</h2>

      </div>
    )
  }
}

export default ParentA