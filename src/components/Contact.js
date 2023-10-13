import { Image } from "react-bootstrap";
import Title from "./Title";
import email from "../images/email.png";
import linkedIn from "../images/linkedin.png";
function Contact() {
  return (
    <div className="contact " style={{paddingTop:"150px"}} id="contact">
      <Title paragraph="Get in Touch" title="Contact Me" />

      <div
        className="contact-info mt-4 d-flex justify-content-between align-items-center mx-auto border p-3 border-2 rouded rounded-pill"
        style={{ width: "340px" }}
      >
        <div className=" d-flex justify-content-between align-items-center">
          <Image src={email} style={{ width: "40px", height: "40px" }} />
          <a className="m-0 ms-2 email" href="ibrahimsayed7410@gmail.com">
            Example@gmail.com
          </a>
        </div>
        <div className=" d-flex justify-content-between align-items-center">
          <Image src={linkedIn} style={{ width: "32px", height: "32px" }} />
          <a className="m-0 ms-2 linked-in" href="https://github.com">
            linked In
          </a>
        </div>
      </div>
      <div className="footer d-flex justify-content-between align-items-center mx-auto " style={{width:"400px",marginTop:"200px"}}>
        <a href="#about" className="mt-3">About</a>
        <a href="#Experience" className="mt-3">experience</a>
        <a href="#Projects"className="mt-3">projects</a>
        <a href="#contact"className="mt-3">Contect</a>

      </div>
      <p className="d-flex justify-content-center align-items-center mt-5 text-center">Copyright © 2023 Ibrahim Sayed. All Rights Reserved.</p>
    </div>
  );
}

export default Contact;
