import React from 'react';
import Scroll from './scroll';
import Links from './links';
import {AndroidStudio, Appium, Apple, Css, Elixir, Git, Github, Html, Java, Js, Perl, Phoenix, Php, Postgres, Python, ReactLogo, Redux, Ruby, Selenium, Swift, Tfs, Typescript, Windows, Xcode} from './images';
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
      <table>
        <tr>
          <td>Front-End</td>
          <td><img src={ReactLogo} alt="react logo"></img></td>
          <td><img src={Redux} alt="redux logo"></img></td>
          <td><img src={Html} alt="html logo"></img></td>
          <td><img src={Css} alt="css logo"></img></td>
          <td><img src={Js} alt="javascript logo"></img></td>
          <td><img id="ts-logo" src={Typescript} alt="typescript logo"></img></td>
          <td><img id="phoenix-logo" src={Phoenix} alt="phoenix logo"></img></td>
        </tr>
        <tr>
          <td>Back-End</td>
          <td><img src={Elixir} alt="elixir logo"></img></td>
          <td><img src={Php} alt="php logo"></img></td>
          <td><img src={Postgres} alt="postgresql logo"></img></td>
        </tr>
        <tr>
          <td>Languages</td>
          <td><img src={Ruby} alt="ruby logo"></img></td>
          <td><img src={Python} alt="python logo"></img></td>
          <td><img src={Java} alt="java logo"></img></td>
          <td><img src={Perl} alt="perl logo"></img></td>
          <td><img src={Swift} alt="swift logo"></img></td>          
        </tr>
        <tr>
          <td>Automation</td>
          <td><img id="appium-logo" src={Appium} alt="appium logo"></img></td>
          <td><img src={Selenium} alt="selenium logo"></img></td>
        </tr>
        <tr>
          <td>Misc</td>
          <td><img src={Git} alt="git logo"></img></td>
          <td><img id="gh-logo" src={Github} alt="github logo"></img></td>
          <td><img src={Tfs} alt="team foundation server logo"></img></td>
          <td><img src={AndroidStudio} alt="android studio logo"></img></td>
          <td><img src={Xcode} alt="xcode logo"></img></td>
          <td><img src={Windows} alt="windows logo"></img></td>
          <td><img src={Apple} alt="apple logo"></img></td>
        </tr>
      </table>
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
