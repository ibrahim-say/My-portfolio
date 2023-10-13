import {  Image } from "react-bootstrap";
import right from "../images/checkmark.png";
import Title from "./Title";
import Arrow from "./Arrow";


function Experience() {
  return (
    
      <div className="experience pt-5" id="experience">
        <Title paragraph="Explore My" title="Experience" />
        <div className="row m-0  row-cols-sm-2 basic-front gy-3  ">
        <div>
         <div >
            <h3 className="text-center mt-3" style={{ color: "rgb(85, 85, 85) " }}>Basics Of Programming</h3>
          <div className="basics  row m-0 row-cols-lg-2 row-cols-xl-3 row-cols-1  gy-3 pb-4 px-3 justify-content-around">
            <div className="d-flex  align-items-center  ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3 ms-2">
                <h6 className="m-0" >C Langauge</h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
            <div className="d-flex  align-items-center ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3 ms-2">
                <h6 className="m-0" >JAVA Langauge</h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
            <div className="d-flex  align-items-center  ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3 ms-2">
                <h6 className="m-0" >OOP </h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
            <div className="d-flex  align-items-center ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3 ms-2">
                <h6 className="m-0" >DATA STRUCTURE </h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
            <div className="d-flex  align-items-center">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3 ms-2">
                <h6 className="m-0" >DATA BASE </h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
         
            <div className="d-flex  align-items-center ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3">
                <h6 className="m-0" >ALGORITHM </h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
         
           
            
         
          </div>
          </div>
         </div>
         <div>
         <div >
            <h3 className="text-center mt-3" style={{ color: "rgb(85, 85, 85) " }}>Frontend Development</h3>
          <div className="front  row m-0  row-cols-lg-2 row-cols-xl-3 row-cols-1 gy-3 pb-4 px-3 justify-content-around">
            <div className="d-flex  align-items-center  ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3 ms-2">
                <h6 className="m-0" >HTML</h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
            <div className="d-flex  align-items-center  ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3 ms-2">
                <h6 className="m-0" >CSS</h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
            <div className="d-flex  align-items-center  ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3 ms-2">
                <h6 className="m-0" >BOOTSTRAP v5 </h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
            <div className="d-flex  align-items-center  ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3 ms-2">
                <h6 className="m-0" >JAVA SCRIPT </h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
            <div className="d-flex  align-items-center  ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3 ms-2">
                <h6 className="m-0" >REACT  </h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
         
            <div className="d-flex  align-items-center  ">
              <Image src={right} style={{ width: "30px", height: "30px" }} />
              <div className=" d-flex justify-content-end flex-column h-100 pt-3">
                <h6 className="m-0" >GIT & GITHUB </h6>
                <p style={{ color: "rgb(85, 85, 85) " }} className="m-0">Experienced</p>
              </div>
            </div>
         
           
            
         
          </div>
          </div>
         </div>
       
       
         
        

        </div>
        <Arrow id="projects"/>
      </div>
 
  );
}

export default Experience;
