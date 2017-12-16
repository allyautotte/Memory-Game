import React from "react";
import "./navbar.css";

const Navbar = (props) => (
  <nav className="navbar">
    <ul>
    <li className="brand">
    <a href="/"><strong>Brain Teaser</strong></a>
    </li>
    <li>Your Score: {props.count} </li> 
    </ul>
  </nav>
);

export default Navbar;
