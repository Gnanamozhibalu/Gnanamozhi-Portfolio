import React from "react";

import TTT from "../img/tic-toc-toe.PNG";
import Calculator from "../img/calculator.png";
import Responsive from "../img/cricket.PNG";
import Portfolio_Temp from "../img/portfolio-template.png";
import Bev from "../img/bev.png";
import Weather from "../img/weather.png";
import Notes from "../img/Todo.PNG";
import Budget from "../img/budget.png";
import Forkify from "../img/forkify.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  My Projects <br />
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          {/* Project 1 */}
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={TTT} alt="dice-game" className="img-fluid"></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Tic-Toc-Toe GAME</h2>
                      <p class="box-info">
                        A game in which two players seek in alternate turns to
                        complete a row, a column, or a diagonal with either
                        three O's or three X's drawn in the spaces of a grid of
                        nine squares
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                    </div>
                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Gnanamozhibalu/Tic-Toc-Toe"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                      <div className="socials">
                        <a
                          href="https://confident-panini-38d6cf.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <iconify-icon data-icon="mdi:play"></iconify-icon>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2  */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Calculator}
                    alt="Calculator"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">CALCULATOR</h2>
                      <p class="box-info">
                        {" "}
                        The most simple mathematical operations: addition,
                    subtraction, multiplication, division. This is a simplified
                    version of the online calculator.{" "}
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                    </div>
                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Gnanamozhibalu/Calculator"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                      <div className="socials">
                        <a
                          href="https://optimistic-mestorf-c31d79.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <iconify-icon data-icon="mdi:play"></iconify-icon>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Responsive}
                    alt="Responsive-webpage"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">CRICKET GAME</h2>
                      <p class="box-info">
                      THE GAME. Cricket involves two teams with 11 players on each side. The captain who wins the toss decides whether his team bats or bowls first.{" "}
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                    </div>
                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Gnanamozhibalu/Cricket-Game"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                      <div className="socials">
                        <a
                          href="https://optimistic-mestorf-c31d79.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <iconify-icon data-icon="mdi:play"></iconify-icon>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Portfolio_Temp}
                    alt="Portfolio-website"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">REACT PORTFOLIO</h2>
                      <p class="box-info">
                        Portfolio made using React with a Weather API Call.
                        React components by React-MDL.
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:material-design"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                      <iconify-icon data-icon="mdi:react"></iconify-icon>
                      <iconify-icon data-icon="fa-brands:node"></iconify-icon>
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/AD757/REACTPortfolio"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                        {/* <a href="https://ad757.surge.sh" rel="noopener noreferrer" target="_blank"> <iconify-icon data-icon="jam:link"></iconify-icon></a> */}
                      </div>
                      <div className="socials">
                        <a
                          href="https://optimistic-mestorf-c31d79.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <iconify-icon data-icon="mdi:play"></iconify-icon>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 5 */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Bev}
                    alt="Nutrition-webapp"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">B-E-V NUTRITION</h2>
                      <p class="box-info">
                        {" "}
                        School team project, a nutrition tracking application
                        that provides nutritional data.
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                      <iconify-icon data-icon="mdi:react"></iconify-icon>
                      <iconify-icon data-icon="fa-brands:node"></iconify-icon>
                      <iconify-icon data-icon="simple-icons:firebase"></iconify-icon>
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/AD757/fe19tp2_lemon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                      <div className="socials">
                        <a
                          href="https://optimistic-mestorf-c31d79.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <iconify-icon data-icon="mdi:play"></iconify-icon>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project  6*/}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Weather}
                    alt="Weather-app"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">WEATHER APP</h2>
                      <p class="box-info">
                        {" "}
                        Weather web app that provides current weather from an
                        API call.{" "}
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                      <iconify-icon data-icon="mdi:react"></iconify-icon>
                      <iconify-icon data-icon="fa-brands:node"></iconify-icon>
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/AD757/React-Weather-App"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                      <div className="socials">
                        <a
                          href="https://optimistic-mestorf-c31d79.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <iconify-icon data-icon="mdi:play"></iconify-icon>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project  7*/}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Notes}
                    alt="Notes taking webapp"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">TODO LIST</h2>
                      <p class="box-info">
                        {" "}
                        ToDo App is simple and awesome app to organize your tasks with very easy to use interface. 
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                      <iconify-icon data-icon="mdi:react"></iconify-icon>
                      <iconify-icon data-icon="fa-brands:node"></iconify-icon>
                      <iconify-icon data-icon="logos:mongodb"></iconify-icon>
                      
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/Gnanamozhibalu/todo-frontend"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                      <div className="socials">
                        <a
                          href="https://boring-almeida-baeec4.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <iconify-icon data-icon="mdi:play"></iconify-icon>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project  8*/}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src={Budget}
                    alt="Budget calculator"
                    className="img-fluid"
                  ></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">BUDGET APP</h2>
                      <p class="box-info">
                        {" "}
                        Web budgeting app that calculates basic budget based on
                        a list of income and expenses.
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/AD757/Budget-App"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                      <div className="socials">
                        <a
                          href="https://optimistic-mestorf-c31d79.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <iconify-icon data-icon="mdi:play"></iconify-icon>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project  9*/}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={Forkify} alt="Recipe" className="img-fluid"></img>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">FORKIFY</h2>
                      <p class="box-info">
                        {" "}
                        Recipe Searching Application using JavaScript & NodeJS.
                        Powered by Food2Fork API.
                      </p>
                      <iconify-icon data-icon="dashicons:html"></iconify-icon>
                      <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                      <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>
                      <iconify-icon data-icon="fa-brands:node"></iconify-icon>
                    </div>

                    <div className="col-sm-4">
                      <div className="socials">
                        <a
                          href="https://github.com/AD757/Forkify"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <i className="ion-social-github"></i>
                          </span>
                        </a>
                      </div>
                      <div className="socials">
                        <a
                          href="https://optimistic-mestorf-c31d79.netlify.app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ico-circle">
                            <iconify-icon data-icon="mdi:play"></iconify-icon>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
