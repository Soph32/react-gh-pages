import React from 'react';
import Scroll from './scroll';
import './App.css';

function Homepage() {
  return (
    <div>
      <MainText />
      <Skills />
    </div>
  );
}

function MainText() {
  return (
    <section>
      <div  className="main-text">
        <h1 className="hi">Hi, I'm</h1>
        <h1 className="name">Sophie</h1>
      </div>
      <Scroll />
    </section>
  )
}

function Skills() {
  return (
    <section>
      <div>
      </div>
    </section>
  )
}

export default Homepage;
