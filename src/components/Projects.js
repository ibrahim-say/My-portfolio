import { Button, Card } from "react-bootstrap"
import memoryGame from "../images/images.jpeg"
import dashboard from "../images/free-dashboard-templates.jpg"
import imageEditor from "../images/Pixlr_ef222ae9-970b-4bc7-a1fb-1fbfdcb6dffe.webp"
import Title from "./Title"
import Arrow from "./Arrow";

function Projects(){
    return(

    <div className="projects pt-5" id="projects">
        <Title paragraph="Browse My Recent" title="Project"/>
        <div className="row m-0 row-cols-sm-2 row-cols-lg-3 g-3">
        <div className="project">
        <Card style={{ width: '100%' }} className="text-center py-3 ">
        <Card.Img variant="top" src={memoryGame} style={{width:"80%",marginLeft:"10%",height:"80%"}}/>
        <Card.Body>
          <Card.Title as={"h4"} className="mb-3">Memory Game</Card.Title>
          <Button className=" rounded-pill me-1 py-2 px-3 git" variant="outline-dark" style={{width:"45%"}} href="https://github.com/ibrahim-say">Github</Button>
          <Button className="rounded-pill py-2 px-3 demo" variant="outline-dark" style={{width:"45%"}} href="https://ibrahim-say.github.io/memory-game/">Live Demo</Button>
        </Card.Body>
      </Card>
        </div>
        <div className="project">
        <Card style={{ width: '100%',height:"100%" }} className="text-center py-3">
        <Card.Img variant="top" src={dashboard} style={{width:"80%",marginLeft:"10%",height:"80%"}}/>
        <Card.Body>
          <Card.Title as={"h4"} className="mb-3">Dashboard</Card.Title>
          <Button className=" rounded-pill me-1 py-2 px-3 git" variant="outline-dark" style={{width:"45%"}} href="https://github.com/ibrahim-say">Github</Button>
          <Button className="rounded-pill py-2 px-3 demo" variant="outline-dark" style={{width:"45%"}} href="https://ibrahim-say.github.io/Template4/">Live Demo</Button>
        </Card.Body>
      </Card>
        </div>
        <div className="project">
        <Card style={{ width: '100%' ,height:"100%" }} className="text-center py-3">
        <Card.Img variant="top" src={imageEditor} style={{width:"80%",marginLeft:"10%",height:"80%"}}/>
        <Card.Body>
          <Card.Title as={"h4"} className="mb-3">Image Editor</Card.Title>
          <Button className=" rounded-pill me-1 py-2 px-3 git" variant="outline-dark" style={{width:"45%"}} href="https://github.com/ibrahim-say">Github</Button>
          <Button className="rounded-pill py-2 px-3 demo" variant="outline-dark" style={{width:"45%"}} href=" https://ibrahim-say.github.io/Image_Editor/y">Live Demo</Button>
        </Card.Body>
      </Card>
        </div>
        </div>
  <Arrow id="contact"/>
    </div>



    
    )
}

export default Projects