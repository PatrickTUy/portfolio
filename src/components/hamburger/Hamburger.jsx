import React, { useState } from 'react';
import './hamburger.scss';
import 'animate.css';

const Hamburger = (props) => {
  const [burger_class, setBurgerClass] = React.useState(true);
  const [burgerOpen, setBurgerOpen] = React.useState(true);
  const updateMenu = () => {
    setBurgerClass(!burger_class);
    setBurgerOpen(!burgerOpen);
  };

  return (
    <div className={'displayMenu' + (props.statusBar ? ' visible' : ' ')}>
      <div className="padding ">
        <h2 className="link-text animate__animated animate__bounceInDown">
          Home
        </h2>
      </div>

      <div className="padding">
        <h2 className="link-text">About</h2>
      </div>

      <div className="padding">
        <h2 className="link-text">Blog</h2>
      </div>

      <div className="padding">
        <h2 className="link-text">Projects</h2>
      </div>

      <div className="padding">
        <h2 className="link-text">Contact</h2>
      </div>
    </div>
  );
};

export default Hamburger;
