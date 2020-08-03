import React from 'react';
import './App.css';

function Homepage() {
  return (
    <div>
      <MainText />
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
