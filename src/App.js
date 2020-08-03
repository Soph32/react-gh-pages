import React from 'react';
import Scroll from './scroll';
import './App.css';

function Homepage() {
  return (
    <div>
      <MainText />
      <Scroll />
    </div>
  );
}

function MainText() {
  return (
    <div  className="main-text">
      <h1 className="hi">Hi, I'm</h1>
      <h1 className="name">Sophie</h1>
    </div>
  )
}

export default Homepage;
