
import './App.css';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';
import About from './components/pages/About';


export default function App() {
return <>
 <Router>
      <div>
         {/* <NavbarComponent /> */}
        <Routes>
         
          <Route path='/' element={<Home />} />          
          <Route path="projects" element={<ProjectGallery />} ></Route>         
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
</>
}
