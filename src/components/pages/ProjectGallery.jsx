import ProjectCard from "../ProjectCard"





export default function ProjectGallery() {
    let projectDetails = require('../ProjectDescription.json')
    console.log(projectDetails.map(projectDetail => projectDetail.name))
    
    return (
        <>
        <h1>Projects</h1>
        <div className="row">
        
            {/* <ProjectCard projectName={projectDetails[0].projectName} descriptionShort={projectDetails[0].descriptionShort} tech1={projectDetails[0].tech1} tech2={projectDetails[0].tech2} tech3={projectDetails[0].tech3} github={projectDetails[0].github} liveLink={projectDetails[0].liveLink}/> */}
             <ProjectCard {...projectDetails[0]}/>
             <ProjectCard {...projectDetails[1]}/>
             <ProjectCard {...projectDetails[2]}/>
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