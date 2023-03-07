import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px auto" }}
    >
      <NavLink to="/" style={{ marginRight: "50px" }}>
        Home Page
      </NavLink>
      <NavLink to="/add">Add product</NavLink>
    </div>
  );
}

export default Navbar;
