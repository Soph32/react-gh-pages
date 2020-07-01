import React from 'react';
import background from "./assets/homepage.jpg";
import './App.css';
//import NavBar from './navbar.js'

function Homepage() {
  return (
    <div className="App">
      <img className="background" src={background} alt="homepage background" />
      <Title />
      <NavBar />
      <MainText />
    </div>
  );
}

function MainText() {
  return (
    <div  className="main-text">
      <h1>Junior Developer</h1>
      <h1>Other Text</h1>
      <h1>Other Text</h1>
    </div>
  )
}

function Title() {
  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

function NavBar() {
  return (
    <div className="nav-bar">
      <a href='#'>About</a>
      <a href='#'>Blog</a>
      <a href='#'>Projects</a>
    </div>
  );
}

export default Homepage;
