import React, { useState } from 'react';
import Scroll from './scroll';
import Links from './links';
import {AndroidStudio, Appium, Apple, Css, Elixir, Git, Github, Html, Java, Js, Perl, Phoenix, Postgres, Python, ReactLogo, Redux, Ruby, Selenium, Tfs, Typescript, Windows, Xcode} from './images';
import './App.css';
import ReactApexChart from 'react-apexcharts';

function Homepage() {
  return (
    <div className="section-container">
      <MainText />
      <Skills />
      <Experience />
      {/* <Qualifications /> */}
    </div>
  );
}

function MainText() {
  const [show, setShow] = useState(false);

  return (
    <section>
      <Links />
      <div className={show ? "title-container" : null}>
        <div  className="main-text">
          <h1 className="hi">Hi, I'm</h1>
          <h1 className="name">Sophie</h1>
        </div>
      </div>
      <div className="button"><button className={show ? "hide-button" : null} onClick={() => setShow(true)}>About Me</button></div> 
      <AboutMe show={show}/>
      <Scroll toSection="Skills"/>
    </section>
  )
}

function AboutMe(props) {
  if (props.show) {
    return (
        <div className="about-me">
          I love creating things and am passionate about building software that makes a difference.
          <br/><br/>I have over <span id="important-text">6 years of professional experience</span> in the tech world with all kinds of languages and environments and now I'm ready to focus on <span id="important-text">front-end development</span>.
          <br/><br/>Please see links above to my <span id="important-text">GitHub</span> and <span id="important-text">blog</span> and please feel free to reach out on <span id="important-text">Twitter</span>!
        </div>
    );
  } else {
    return null;
  }
}

function Skills() {
  return (
    <section>
      <h1 className="section-title" id="skills">Skills</h1>
      <div className="skills-table">
        <table>
          <tr>
            <th>Front-End</th>
            <td><a href="https://reactjs.org/"><img src={ReactLogo} alt="react logo"></img></a></td>
            <td><a href="https://redux.js.org/"><img src={Redux} alt="redux logo"></img></a></td>
            <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src={Html} alt="html logo"></img></a></td>
            <td><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src={Css} alt="css logo"></img></a></td>
            <td><a href="https://www.javascript.com/"><img src={Js} alt="javascript logo"></img></a></td>
            <td><a href="https://www.typescriptlang.org/"><img id="ts-logo" src={Typescript} alt="typescript logo"></img></a></td>
            <td><a href="https://phoenixframework.org/"><img id="phoenix-logo" src={Phoenix} alt="phoenix logo"></img></a></td>
          </tr>
          <tr>
            <th>Back-End</th>
            <td><a href="https://elixir-lang.org/"><img src={Elixir} alt="elixir logo"></img></a></td>
            <td><a href="https://www.postgresql.org/"><img src={Postgres} alt="postgresql logo"></img></a></td>
          </tr>
          <tr>
            <th>Languages</th>
            <td><a href="https://www.ruby-lang.org/en/"><img src={Ruby} alt="ruby logo"></img></a></td>
            <td><a href="https://www.python.org/"><img src={Python} alt="python logo"></img></a></td>
            <td><a href="https://docs.oracle.com/en/database/oracle/oracle-database/12.2/jjdev/Java-overview.html#GUID-17B81887-C338-4489-924D-FDDF2468DEA7"><img src={Java} alt="java logo"></img></a></td>
            <td><a href="https://www.perl.org/"><img src={Perl} alt="perl logo"></img></a></td>
          </tr>
          <tr>
            <th>Automation</th>
            <td><a href="http://appium.io/"><img id="appium-logo" src={Appium} alt="appium logo"></img></a></td>
            <td><a href="https://www.selenium.dev/documentation/en/getting_started_with_webdriver/"><img src={Selenium} alt="selenium logo"></img></a></td>
          </tr>
          <tr>
            <th>Misc</th>
            <td><a href="https://git-scm.com/"><img src={Git} alt="git logo"></img></a></td>
            <td><a href="https://github.com/"><img id="gh-logo" src={Github} alt="github logo"></img></a></td>
            <td><a href="https://docs.microsoft.com/en-gb/azure/devops/server/admin/admin-quick-ref?view=azure-devops-2020&viewFallbackFrom=azure-devops"><img src={Tfs} alt="team foundation server logo"></img></a></td>
            <td><a href="https://developer.android.com/studio"><img src={AndroidStudio} alt="android studio logo"></img></a></td>
            <td><a href="https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/"><img src={Xcode} alt="xcode logo"></img></a></td>
            <td><a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands"><img src={Windows} alt="windows logo"></img></a></td>
            <td><a href="https://support.apple.com/en-gb/guide/terminal/welcome/mac"><img src={Apple} alt="apple logo"></img></a></td>
          </tr>
        </table> 
      </div>     
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
          breakpoint: 1000,
          options: {
            chart: {
              width: 450
            },
            legend: {
              fontSize: '14px',
              position: 'bottom'
            }
          }
        },
        {
          breakpoint: 800,
          options: {
            chart: {
              width: 400
            },
          }
        },
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 330
            },
            legend: {
              fontSize: '10px'
            }
          }
        },
        {
          breakpoint: 500,
          options: {
            chart: {
              width: 350
            },
            legend: {
              position: 'left',
            }
          }
        },
        {
          breakpoint: 330,
          options: {
            chart: {
              width: 280
            },
            legend: {
              position: 'bottom',
            }
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
          breakpoint: 1000,
          options: {
            chart: {
              width: 430
            },
            legend: {
              fontSize: '14px',
              position: 'bottom'
            }
          }
        },
        {
          breakpoint: 800,
          options: {
            chart: {
              width: 350
            },
          }
        },
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 300
            },
          },
          legend: {
            fontSize: '10px'
          }
        },
        {
          breakpoint: 500,
          options: {
            legend: {
              position: 'left'
            }
          }
        },
        {
          breakpoint: 330,
          options: {
            chart: {
              width: 250
            },
            legend: {
              position: 'bottom'
            }
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
      {/* <Scroll toSection="Education"/> */}
    </section>
  )
}

// function Qualifications() {
//   return (
//     <section>
//       <h1 className="section-title" id="education">Education</h1>
//     </section>
//   )
// }

export default Homepage;
