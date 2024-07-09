import React, { Component } from "react";
import { Link } from "react-router-dom";
export class LayoutR extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default LayoutR;
