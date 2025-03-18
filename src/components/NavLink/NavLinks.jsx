import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    < >
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/my-profile'}>My Profile</NavLink></li>
      <li><a href="#footer">Contact</a></li>
    </>
  );
};

export default NavLinks;