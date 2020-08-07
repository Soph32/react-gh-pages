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
          <td><a href="https://reactjs.org/"><img src={ReactLogo} alt="react logo"></img></a></td>
          <td><a href="https://redux.js.org/"><img src={Redux} alt="redux logo"></img></a></td>
          <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src={Html} alt="html logo"></img></a></td>
          <td><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src={Css} alt="css logo"></img></a></td>
          <td><a href="https://www.javascript.com/"><img src={Js} alt="javascript logo"></img></a></td>
          <td><a href="https://www.typescriptlang.org/"><img id="ts-logo" src={Typescript} alt="typescript logo"></img></a></td>
          <td><a href="https://phoenixframework.org/"><img id="phoenix-logo" src={Phoenix} alt="phoenix logo"></img></a></td>
        </tr>
        <tr>
          <td>Back-End</td>
          <td><a href="https://elixir-lang.org/"><img src={Elixir} alt="elixir logo"></img></a></td>
          <td><a href="https://www.postgresql.org/"><img src={Postgres} alt="postgresql logo"></img></a></td>
        </tr>
        <tr>
          <td>Languages</td>
          <td><a href="https://www.ruby-lang.org/en/"><img src={Ruby} alt="ruby logo"></img></a></td>
          <td><a href="https://www.python.org/"><img src={Python} alt="python logo"></img></a></td>
          <td><a href="https://docs.oracle.com/en/database/oracle/oracle-database/12.2/jjdev/Java-overview.html#GUID-17B81887-C338-4489-924D-FDDF2468DEA7"><img src={Java} alt="java logo"></img></a></td>
          <td><a href="https://www.perl.org/"><img src={Perl} alt="perl logo"></img></a></td>
        </tr>
        <tr>
          <td>Automation</td>
          <td><a href="http://appium.io/"><img id="appium-logo" src={Appium} alt="appium logo"></img></a></td>
          <td><a href="https://www.selenium.dev/documentation/en/getting_started_with_webdriver/"><img src={Selenium} alt="selenium logo"></img></a></td>
        </tr>
        <tr>
          <td>Misc</td>
          <td><a href="https://git-scm.com/"><img src={Git} alt="git logo"></img></a></td>
          <td><a href="https://github.com/"><img id="gh-logo" src={Github} alt="github logo"></img></a></td>
          <td><a href="https://docs.microsoft.com/en-gb/azure/devops/server/admin/admin-quick-ref?view=azure-devops-2020&viewFallbackFrom=azure-devops"><img src={Tfs} alt="team foundation server logo"></img></a></td>
          <td><a href="https://developer.android.com/studio"><img src={AndroidStudio} alt="android studio logo"></img></a></td>
          <td><a href="https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/"><img src={Xcode} alt="xcode logo"></img></a></td>
          <td><a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands"><img src={Windows} alt="windows logo"></img></a></td>
          <td><a href="https://support.apple.com/en-gb/guide/terminal/welcome/mac"><img src={Apple} alt="apple logo"></img></a></td>
        </tr>
      </table>
      <Scroll toSection="Experience"/>
    </section>
  )
}

function Experience() {
  const abcWorkData = {
    series: [30, 25, 20, 15, 5, 5],
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
      labels: ["Codebase Maintenance", "Feature Development", "Automation", "App Development", "Research", "Digital Audit"],
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
