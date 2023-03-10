import Project from "../Project";


export default function ProjectGallery() {
    let projectDetails = require('../ProjectDescription.json')

    return (     
        <>
        <h1>Projects</h1>
        <div className="row">
        {projectDetails.map(projectDetail => <Project {...projectDetail}/>)}
        </div>
        </>
    )
}