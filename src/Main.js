import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Main extends Component {
  render() {
    return (
      <div>
        <NavLink to="/home" Style={({isActive})=>{return isActive ? {color:"plum"} : {};}}>Home</NavLink>&nbsp; &nbsp;
        <NavLink to="/about" tyle={({isActive})=>{return isActive ? {color:"aqua"} : {};}}>About</NavLink>
      </div>
    )
  }
}

export default Main