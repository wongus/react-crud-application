import React from "react";
import logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar nav-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={logo} alt=""></img>
            <p className="title">dumbsite</p>
          </div>
          <a role="button" className="navbar-burger navbar-dropdown navbar-item is-hidden-desktop" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-start navbar-menu">
          <div className="navbar-item is-hidden-touch">
            <a href="/">home</a>
          </div>
          <div className="navbar-item is-hidden-touch">
            <div className=" is-white is-light">
              <a href="/">placeholder</a>
            </div>
          </div>
          <div className="navbar-item is-hidden-touch">
            <div className=" is-white is-light">
              <a href="/">placeholder</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
