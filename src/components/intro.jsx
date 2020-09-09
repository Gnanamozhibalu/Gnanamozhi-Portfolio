import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (

      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Gnanamozhi Balu</h1>
              {/* <p className="pt-3"> HTML5 | CSS3 | Javascript | React |  NodeJS </p> */}
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "MEAN Stack Web Developer",
                      "Web Design",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <div className="socials">
                        <ul>
                        <li>
                            <a
                              href="https://github.com/Gnanamozhibalu"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/gnanamozhi-balu-40645b1b0/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          
                          <li>
                            <a
                              href="https://www.instagram.com/gnanam_cutieee/?hl=en"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                
                                <i className="ion-social-instagram"></i>
                              </span>
                            </a>
                          </li>

                        </ul>
                      </div>
                      {/* {<p className={"h3 mytext pt-3" + this.props.fadeIn}>
							I love to transform ideas into reality using code.I
							am passionate about using Javascript and animations
							to create awesome user experiences.
						</p>} */}
                      <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
