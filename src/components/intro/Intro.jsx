import Typewriter from 'typewriter-effect';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Button from '@mui/material/Button';
import './intro.scss';
import 'animate.css'

import { init } from 'ityped';

console.log('this is intro');

function Intro() {
  

  return (
    <div className="bg-primary flex intro" id="intro">
      <div className="left flex-1/2 flex-col pl-[100px] justify-center overflow-scroll">
        <div className="wrapper">
          <h2 className="animate__animated animate__bounceInDown">Hi There, I'm</h2>
          <h1>LOREM. Ipsum</h1>
          <span className="flex-row">
            <h3 className="margin-right">Freelance </h3>
            <div className="yellow">
              Developer
              {/* <Typewriter 
                className="yellow"
                options={{ 
                strings:["Developer", "UI/UX Designer", "Content Creator"],
                autoStart:true,
                delay:75,
                loop:true
                }}
                />  */}
            </div>
          </span>
          <div className="action-button">
            <button type="submit" className="hover-big button">
              ABOUT LOREM
            </button>

            <button type="submit" className="hover-big button margin-left">
              LOREM NOW
            </button>
          
          </div>
        </div>
        <div className="arrow-icon">
          <a href="#works">
            <KeyboardDoubleArrowDownIcon
              className="arrow"
              sx={{ width: 100, height: 100, color: 'yellow' }}
              cursor="pointer"
              width="100px"
              height="100px"
            />
          </a>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Intro;
