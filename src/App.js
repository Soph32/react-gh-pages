import React, {useRef, useEffect} from 'react';
import Scroll from './scroll';
import Links from './links';
import Chart from 'react-apexcharts';
import {AndroidStudio, Appium, Apple, Css, Elixir, Git, Github, Html, Java, Js, Perl, Phoenix, Postgres, Python, ReactLogo, Redux, Ruby, Selenium, Tfs, Typescript, Windows, Xcode} from './images';
import './App.css';
import ReactApexChart from 'react-apexcharts';

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
          <td><img src={Postgres} alt="postgresql logo"></img></td>
        </tr>
        <tr>
          <td>Languages</td>
          <td><img src={Ruby} alt="ruby logo"></img></td>
          <td><img src={Python} alt="python logo"></img></td>
          <td><img src={Java} alt="java logo"></img></td>
          <td><img src={Perl} alt="perl logo"></img></td>
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
  const abcWorkData = {
    series: [60, 20, 10, 5, 5],
    options: {
      chart: {
        width: 500,
        type: 'pie',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 700,
        },
      },
      stroke: {
        colors: ['#101820'],
      },
      theme: {
        palette: 'palette4'
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
      },
      labels: ['Automation', 'App Development', "Updates and Maintenance", "Research", "Digital Audit"],
      responsive: [
        {
          breakpoint: 2000,
          options: {
            chart: {
              width: 530
            },
            legend: {
              fontSize: '14px'
            }
          }
        },
        {
          breakpoint: 900,
          options: {
            chart: {
              width: 380
            },
          }
        },
        {
          breakpoint: 590,
          options: {
            chart: {
              width: 380
            },
            legend: {
              fontSize: '10px'
            }
          }
        },
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 300
            },
          }
        },
        {
          breakpoint: 330,
          options: {
            chart: {
              width: 240
            },
          }
        }
      ]
    },
  };

  const ambWorkData = {
    series: [80, 20],
    options: {
      chart: {
        width: 500,
        type: 'pie',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 700,
        }
      },
      stroke: {
        colors: ['#101820'],
      },
      theme: {
        palette: 'palette4'
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
      },
      labels: ['Front-End', 'Back-End'],
      responsive: [
        {
          breakpoint: 2000,
          options: {
            chart: {
              width: 500
            },
            legend: {
              fontSize: '14px'
            }
          }
        },
        {
          breakpoint: 900,
          options: {
            chart: {
              width: 350
            },
          }
        },
        {
          breakpoint: 590,
          options: {
            chart: {
              width: 350
            },
          },
          legend: {
            fontSize: '10px'
          }
        },
        {
          breakpoint: 380,
          options: {
            chart: {
              width: 260
            },
          }
        },
        {
          breakpoint: 330,
          options: {
            chart: {
              width: 200
            },
          }
        }
      ]
    },
  };

  return (
    <section>
      <h1 className="section-title" id="experience">Experience</h1>
      <div className="charts">
        <div className="chart">
          <h2>Audit Bureau of Circulations</h2>
          <h3 className="exp-years">2014-2020</h3>
          <ReactApexChart className="abc-pie" options={abcWorkData.options} series={abcWorkData.series} type="pie" width={500} />
        </div>  
        <div className="chart ambrit">
          <h2>Ambrit</h2>
          <h3 className="exp-years">2020</h3> 
          <ReactApexChart className="amb-pie" options={ambWorkData.options} series={ambWorkData.series} type="pie" width={500} />
        </div>
      </div>
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
