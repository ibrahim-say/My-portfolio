import { useState } from "react"
import { Image } from "react-bootstrap"
import totop from "../images/images (1).png"


function BackToTop(){
const [top,setTop] = useState("")
    window.addEventListener("scroll",()=>{
        if (window.pageYOffset>100) {     
            setTop(<a href="#navbar"><Image  src={totop} style={{ width: "50px", height: "50px" }} className="to-top " /></a> )
        }else{
            setTop("")
        }
        }
        
        )

    return (
        top
    )
}

export default BackToTop