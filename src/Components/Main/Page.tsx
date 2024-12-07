

import React from 'react';
import Navbar from '../Navbar/Page';
import Hero from '../Hero/Page';
import Companies from '../Companies/Page';
import Will from '../Will/Page';
import Platform from '../Platform/Page';
import Plans from '../Plans/Page';

const Main: React.FC = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
      </div>
      <Companies  />
      <Will />
      <Platform />
      <Plans />
    </>
  );
};

export default Main;
