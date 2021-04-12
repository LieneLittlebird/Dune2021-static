import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import venustransp from "./venustransp.png";

const Header = () => (
  <div>
    <ul id="navbar">
      <li>
        <NavLink className="nav-link" to="/" exact>
          <div id="header-logo">
            <img id="navbar-img" src={venustransp} alt="dogmeme" />
            <span>Dune 2021</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/chat">
          Chat
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  </div>
);
export default Header;
