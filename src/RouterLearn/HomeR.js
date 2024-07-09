import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom/dist/umd/react-router-dom.development'
class HomeR extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <nav>
          <ul>
          <li>
            <Link to="/home/child">child</Link>
          </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    )
  }
}

export default HomeR