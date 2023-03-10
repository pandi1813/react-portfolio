
import './App.css';
import Home from './components/pages/Home';
import NavbarComponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';


export default function App() {
return <>
 <Router>
      <div>
         {/* <NavbarComponent /> */}
        <Routes>
         
          <Route path='/' element={<Home />} />          
          <Route path="projects" element={<ProjectGallery />} >
          </Route>         
          <Route path="contact" element={<Contact />} />
          
        </Routes>
      </div>
    </Router>
</>
}
