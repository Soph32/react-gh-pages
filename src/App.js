import React from 'react';
import background from "./assets/homepage.jpg";
import './App.css';
import Header from './header.js'

function Homepage() {
  return (
    <div className="App">
      <img className="background" src={background} alt="homepage background" />
      <Header />
      <MainText />
    </div>
  );
}

function MainText() {
  return (
    <div  className="main-text">
      <h1 id="first-main-text">Junior Developer</h1>
      <h1 id="second-main-text">Other Text</h1>
      <h1 id="third-main-text">Other Text</h1>
    </div>
  )
}

export default Homepage;
