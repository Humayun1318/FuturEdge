import React from 'react';
import { Outlet } from 'react-router-dom';

const MainSection = () => {
  return (
    <div className='font-roboto-body'>
      <Outlet className=""></Outlet>
      <p className=''>Outlet er Niche</p>
    </div>
  );
};

export default MainSection;