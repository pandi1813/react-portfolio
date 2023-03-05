import ProjectCard from "../ProjectCard"
// import Project from "./Project"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"




export default function ProjectGallery() {
    return (
        <>
        <h1>Projects</h1>
        <div className="row">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>

        </div>

        {/* <Router>
            <Routes>
            <Route path="project" element={<Project />} />
            </Routes>
        </Router> */}
        </>
    )
}