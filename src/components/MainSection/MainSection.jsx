import React from 'react';
import { Outlet } from 'react-router-dom';

const MainSection = () => {
  return (
    <div className='font-roboto-body'>
      Main Section:  Main Section will show different pages based on routes.
      <Outlet></Outlet>
    </div>
  );
};

export default MainSection;