import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "85%", value: "85" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "80%", value: "80" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "85%",
          value: "85"
        },
        { id: "VanillaJS_skill", content: "VanillaJS", porcentage: "75%", value: "75" },
        {
          id: "React Native_skill",
          content: "React Native",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "GitHub/Git Version Control_skill",
          content: "GitHub/Git Version Control",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "Java_skill",
          content: "Java",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "Linux_skill",
          content: "Linux",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "node_skill",
          content: "NodeJS",
          porcentage: "40%",
          value: "40"
        },
        {
          id: "Express_skill",
          content: "ExpressJS",
          porcentage: "45%",
          value: "45"
        },
        {
          id: "Linux_skill",
          content: "Linux",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "C++_skill",
          content: "C++",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "jquery_skill",
          content: "jQuery",
          porcentage: "60%",
          value: "60"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am currently a Bachelor of Science studetn at Southern New Hampshire University. I am currently pursuing a bachelors degree in computer science with a concentration in software engineering. I have held a high GPA while attending Southern New Hampshire University."
        },
        {
          id: "second-p-about",
          content:
            "I have also attended a full stack web and mobile development bootcamp through Nucamp's Online bootcamp. Through this bootcamp i have learned the basics of web and mobile development using JavaScript and JavaScript framework such as, React, React Native, Node, Express, and MongoDB."
        },
        {
          id: "third-p-about",
          content:
            "While attending both Southern New Hampshire University and the Fullstack web and mobile development bootcamp, I have found that my passion has been long overlooked. Creating applications and programming has not been apart of my life long but i find it very fun and entertaining. I hope to bring my passion into a team in order to aid in the development of cutting edge applications and technologies. "
        }
      ]
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
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
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
