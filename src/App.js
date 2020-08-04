import React from 'react';
import Scroll from './scroll';
import Links from './links';
import './App.css';

function Homepage() {
  return (
    <div className="section-container">
      <MainText />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

function MainText() {
  return (
    <section>
      <Links />
      <div  className="main-text">
        <h1 className="hi">Hi, I'm</h1>
        <h1 className="name">Sophie</h1>
      </div>
      <Scroll toSection="Skills"/>
    </section>
  )
}

function Skills() {
  return (
    <section>
      <h1 className="section-title" id="skills">Skills</h1>
      <Scroll toSection="Experience"/>
    </section>
  )
}

function Experience() {
  return (
    <section>
      <h1 className="section-title" id="experience">Experience</h1>
      <Scroll toSection="Education"/>
    </section>
  )
}

function Education() {
  return (
    <section>
      <h1 className="section-title" id="education">Education</h1>
    </section>
  )
}

export default Homepage;
