import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link to="/">
          <i className="fas fa-id-card"></i>
        </Link>
      </li>
      <li>
        <Link to="/cards">
          <i className="fas fa-code"></i>
        </Link>
      </li>

      <li>
        <i className="fab fa-amazon"></i>
      </li>

      <li>
        <Link to="/testing">Testing</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
