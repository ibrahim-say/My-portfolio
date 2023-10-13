import {  Image } from "react-bootstrap";
import Title from "./Title";
import myImage from "../images/WhatsApp Image 2023-08-27 at 04.21.29.jpg";
import experience from "../images/experience.png";
import education from "../images/education.png";
import Arrow from "./Arrow";

function About() {
  return (
    
      <div className="about pt-5 " id="about">
        <Title paragraph="Get To know More" title="About Me" />
        <div className="d-flex aboutme justify-content-center align-items-center mt-5 pt-5">
          <div className="text-center me-5 aboutimage ">
            <Image
              src={myImage}
              className="rounded   "
              style={{ width: "275px", height: "275px" }}
            />
          </div>
          <div>
            <div className="d-flex justify-content-center align-items-center exp-edu ">
              <div className="myexperience text-center me-4 py-4 px-5 ">
                <Image
                  className="rounded rounded-circle"
                  src={experience}
                  style={{ width: "30px", height: "30px" }}
                />
                <h5>Experience</h5>
                <p className="mb-0" style={{ color: "rgb(85, 85, 85)" }}>
                  2+Years
                </p>
                <p className="mb-0" style={{ color: "rgb(85, 85, 85)" }}>
                  Frontend Development
                </p>
              </div>
              <div className="myeducation text-center py-4 px-5 ">
                <Image
                  className="rounded rounded-circle "
                  src={education}
                  style={{ width: "30px", height: "30px" }}
                />
                <h5>Education</h5>
                <p className="mb-0" style={{ color: "rgb(85, 85, 85)" }}>
                  Faculty Of Computer And
                </p>
                <p className="mb-0" style={{ color: "rgb(85, 85, 85)" }}>
                  AI Helwan University
                </p>
              </div>
            </div>
            <p
              className="mt-3 text-center aboutparagraph"
              style={{ maxWidth: "600px" }}
            >
              I’m a web developer (react.js) professional , I’m Senior in
              Faculty of computers And Artificial Intelligence Helwan University
              ,I Studied Basics of Programming For 2+Years. Now, Study for
              Frontend Development.{" "}
            </p>
          </div>
        </div>
        <Arrow  id="experience"/>
      </div>
   
  );
}

export default About;
