import React from 'react';

function Header() {
  return (
    <div className="header-div">
      <NavBar />
      <Title />
    </div>
  )
}

// replace with custom logo of some sort
function Title() {
  return (
    <div className="title">
      <h1>Placeholder</h1>
    </div>
  );
}

function NavBar() {
  return (
    <div className="nav-bar">
      <a href='#'>About</a>
      <a href='#'>Projects</a>
      <a href='#'>Blog</a>
      <a href='#'>Contact</a>
    </div>
  );
}

export default Header;
