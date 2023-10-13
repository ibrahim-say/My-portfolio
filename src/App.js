
import About from './components/About';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Navbarapp from './components/Navbar';
import Projects from './components/Projects';
import { Container } from "react-bootstrap";
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';


function App() {
  return (
   <Container>
    <Navbarapp/>
    <Profile/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    <BackToTop/>
   </Container>
  );
}

export default App;
