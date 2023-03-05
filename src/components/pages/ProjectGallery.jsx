import ProjectCard from "../ProjectCard"





export default function ProjectGallery() {
    let projectDetails = require('../ProjectDescription.json')
    console.log(projectDetails.map(projectDetail => projectDetail.name))
    
    return (
        <>
        <h1>Projects</h1>
        <div className="row">
            {projectDetails.map(projectDetail => <ProjectCard {...projectDetail}/>)}
           
        </div>

    
        </>
    )
}