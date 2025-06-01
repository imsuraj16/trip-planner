import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[4rem] py-[2rem]">
      <div>
        <NavLink to='/' className="text-[1.5rem]">✈️ TripPlan</NavLink>
      </div>
      <div className="flex items-center gap-[3rem]">
        <NavLink to="/" className={(e) => (e.isActive ? "text-blue-600" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/trips"
          className={(e) => (e.isActive ? "text-blue-600" : "")}
        >
          Trips
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => (e.isActive ? "text-blue-600" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/add-trip"
          className={(e) => (e.isActive ? "text-blue-600" : "")}
        >
          Add Trips
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
