import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <div>
         <Navbar />
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path='/' element={<Home />} />          
          <Route path="projects" element={<ProjectGallery />} >
          </Route>         
          <Route path="contact" element={<Contact />} />
           <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

