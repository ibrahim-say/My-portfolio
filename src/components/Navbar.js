import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarapp(){
    return(
    <Navbar expand="lg" className="py-4  navbar mx-5 justify-content-between" id='navbar'>
        <Navbar.Brand href="#home" style={{fontSize:"30px"}} >Ibrahim Sayed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
          <Nav className="me-auto nav" style={{fontSize:"25px"}}  >
            <Nav.Link href="#about"style={{color:"black"}}  >About</Nav.Link>
            <Nav.Link href="#experience"style={{color:"black "}} >Experience</Nav.Link>
            <Nav.Link href="#projects"style={{color:"black "}} >Projects</Nav.Link>
            <Nav.Link href="#contact"style={{color:"black "}} >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Navbarapp