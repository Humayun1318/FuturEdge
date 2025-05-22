import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to={isHome ? "#about" : "/#about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={isHome ? "#service" : "/#service"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={isHome ? "#footer" : "/#footer"}>Contact Us</NavLink>
      </li>
    </>
  );
};

export default NavLinks;
