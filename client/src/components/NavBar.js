import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
return (
    <div className="nav-container">
    <NavLink to="/" className="nav-link">
        Home
    </NavLink>
    <NavLink to="/login" className="nav-link">
        Login/Signup
    </NavLink>
    <NavLink to="/pets" className="nav-link">
        Pets
    </NavLink>
    <NavLink to="/profile" className="nav-link">
        Profile
    </NavLink>
    </div>
);
}

export default NavBar;
