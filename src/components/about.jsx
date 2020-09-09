import React from "react";
import male1 from "../img/male1.jpeg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Gnanamozhi, born and raised in Tamilnadu, India.I got more interest in tech and web development and found myself leaning towards programming. Then I decided to educate myself and took a 4 year B.Tech/Information Technology at Panimalar Engineering College,Chennai.",
        },
        {
          id: "second-p-about",
          content:
            "If you navigate to the work section, you'll see some of the Frontend projects I've accomplished. I enjoy to continue learning to improve my knowledge and to gain new experience. I want to take my passion, education, and experience to develop websites and applications.",
        },
        /* {
          id: "third-p-about",
          content:
            "When not coding, you will find me working out, playing football or gaming. I'm looking for a full time job and I'm actively applying to related jobs. I am open to frontend web dev. In a company, I value culture, impact and mission. Please feel free to contact me for job opportunities!"
        }, */
      ],
      res_paper1: [
        {
          id: "first-p-about",
          content:
            "•	Presented research paper titled “Attribute Based secure data-retrieval scheme using CP-ABE ” in International Conference on Recent Trends in Engineering Science and Management."        
        },
      ],
      res_paper2: [
        {
          id: "second-p-about",
          content:
            "•	Presented research paper titled “Deployment of Overlay Networks in IoT Applications” in  International conference of Electronics, Communication and Aerospace Technology.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            src={male1}
                            alt="profile pic"
                            style={{ height: 250 + "px", width: 250 + "px" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 text-center">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">Skills</h5>
                        </div>

                        <div className="skills-text">
                          <p>
                            <iconify-icon data-icon="logos:html-5"></iconify-icon>{" "}
                            HTML5 <br /> <br />
                            <iconify-icon data-icon="logos:css-3"></iconify-icon>{" "}
                            CSS3 <br /> <br />
                            <iconify-icon data-icon="logos:bootstrap"></iconify-icon>{" "}
                            Bootstrap <br /> <br />
                            {/* <iconify-icon data-icon="logos:sass"></iconify-icon> SASS <br/> <br/> */}
                            <iconify-icon data-icon="logos:javascript"></iconify-icon>{" "}
                            Javascript <br /> <br />
                            <iconify-icon data-icon="logos:react"></iconify-icon>{" "}
                            React JS <br /> <br />
                            <iconify-icon data-icon="logos:nodejs"></iconify-icon>{" "}
                            Node JS <br /> <br />
                            <iconify-icon data-icon="logos:firebase"></iconify-icon>{" "}
                            Firebase <br /> <br />
                            <iconify-icon data-icon="logos:mongodb"></iconify-icon>{" "}
                            Mongodb <br /> <br />
                            <iconify-icon data-icon="logos:aws"></iconify-icon>
                            AWS <br /> <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Research Papers</h5>
                      </div>
                      {this.state.res_paper1.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                      	<a href="https://www.ijates.com/images/short_pdf/1427003514_834.pdf" class="btn btn-primary">LEARN MORE</a>
                        {this.state.res_paper2.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                      <a href="https://ieeexplore.ieee.org/abstract/document/8212776" class="btn btn-primary">LEARN MORE</a>
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

export default About;
