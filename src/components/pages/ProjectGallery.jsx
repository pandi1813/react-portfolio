import ProjectCard from "../ProjectCard"





export default function ProjectGallery() {
    let projectDetails = require('../ProjectDescription.json')
    console.log(projectDetails.map(projectDetail => projectDetail.name))
    
    return (
        <>
        <h1>Projects</h1>
        <div className="row">

            <ProjectCard projectName="test" description="some description" tech1="react" tech2="react router" tech3="bootstrap" github="github repo" live="live page"/>
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