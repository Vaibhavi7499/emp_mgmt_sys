import React, { Component } from 'react'

class ChildA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    id:1
    }
  }
  render() {
    return (
      <div>
        ChildA
        <h1>{this.props.name}</h1>
        <button onClick={()=>this.props.id(this.state.id)}>click</button>
        </div>
    )
  }
}

export default ChildA