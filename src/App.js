import React from 'react';
import './App.css';

function Homepage() {
  return (
    <div className="App">
      <Title />
      <NavBar />
    </div>
  );
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
