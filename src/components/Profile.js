import {  Image } from "react-bootstrap"
import myImage from "../images/WhatsApp Image 2023-01-04 at 5.35.19 PM.jpeg"
import li from "../images/linkedin.png"
import gh from "../images/github.png"
import Button from 'react-bootstrap/Button';
import cv from "../cv.pdf"

function Profile(){
    return(
      
        <div className="profile " id="profile">
            <div  className="text-center">
        <Image src={myImage} className="rounded rounded-circle mb-4"  style={{width:"275px",height:"275px"}} />       
            </div>
       <div className=" text-center intro-text">
        <p className="mb-0">Hello,I’m</p>
        <h1>Ibrahim Sayed</h1>
        <p>Frontend Development</p>
        <div className="d-flex justify-content-center gap-1">
        <Button variant="outline-dark" className="rounded-pill p-2 " style={{width:"200px"}} onClick={()=>{window.open(cv)}}>Download CV</Button>
        <Button variant="dark" className="rounded-pill p-2 "style={{width:"200px"}} href="#contact">Contact Info</Button>
        </div>
        <div className="d-flex justify-content-center mt-3 gap-1">
            <a href="https://www.linkedin.com/in/ibrahim-sayed-59abb1283/">
        <Image  src={li} className="rounded rounded-circle "  style={{width:"40px",height:"40px"}} />

            </a>
<a href="https://github.com/ibrahim-say">
<Image src={gh} className="rounded rounded-circle"  style={{width:"40px",height:"40px"}} />

</a>
        </div>
       </div>
        </div>
       
    )
}

export default Profile