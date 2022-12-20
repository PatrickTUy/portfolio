import React, { useState } from 'react';
import './topbar.scss';

const Topbar = (props) => {
  const [burger_class, setBurgerClass] = React.useState(false);
  const [burgerOpen, setBurgerOpen] = React.useState(false);
  const updateMenu = () => {
    setBurgerClass(!burger_class);
    setBurgerOpen(!burgerOpen);
    props.changeStateInParent();
  };

  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="topbar-left">
          <a href="#intro" className="logo">
            TYP
          </a>
          <div className="circle"></div>
        </div>
        <div className="topbar-right">
          <div className="menu display">
            <div className="margin">
              <h2 className="links">
                <a href="#home"> Home</a>
              </h2>
            </div>

            <div className="margin">
              <h2 className="links">
                <a href="#intro"> About</a>
              </h2>
            </div>

            <div className="margin">
              <h2 className="links">
                <a href="#"> Blog</a>
              </h2>
            </div>

            <div className="margin">
              <h2 className="links">
                <a href="#works"> Projects</a>
              </h2>
            </div>

            <div className="margin">
              <h2 className="links">
                <a href="#contact"> Contact</a>
              </h2>
            </div>
          </div>

          <div className="burger-menu" onClick={updateMenu}>
            <div
              className={
                burger_class ? 'burger-bar clicked' : 'burger-bar unclicked'
              }
            ></div>
            <div
              className={
                burger_class ? 'burger-bar clicked' : 'burger-bar unclicked'
              }
            ></div>
            <div
              className={
                burger_class ? 'burger-bar clicked' : 'burger-bar unclicked'
              }
            ></div>
          </div>
        </div>
      </div>
      <div className={'displayMenu' + (burgerOpen ? ' visible' : ' ')}>
        <div className="padding">
          <h2 className="link-text">Home</h2>
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
    </div>
  );
};

export default Topbar;
