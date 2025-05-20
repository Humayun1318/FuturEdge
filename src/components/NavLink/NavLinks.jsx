import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <a href="#about">About Us</a>
      </li>
      <li>
        <a href="#service">Services</a>
      </li>
      <li>
        <a href="#footer">Contact Us</a>
      </li>
    </>
  );
};

export default NavLinks;
