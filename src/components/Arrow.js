import { Image } from "react-bootstrap"
import arrow from "../images/arrow.png"

function Arrow(props){
    return(
<a className="d-none d-lg-flex justify-content-end mt-5 pt-5" href={`#${props.id}`}>
    <Image src={arrow} style={{width:"40px",height:"40px"}}/>
</a>
    )
}

export default Arrow