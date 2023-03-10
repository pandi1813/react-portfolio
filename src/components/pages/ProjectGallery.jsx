import Project from "../Project";
import NavbarComponent from '../NavbarComponent';



export default function ProjectGallery() {
    let projectDetails = require('../ProjectDescription.json')

    return (     
        <>
        <NavbarComponent/>
        <h1>Projects</h1>
        <div className="row">
        {projectDetails.map(projectDetail => <Project {...projectDetail}/>)}
        </div>
        </>
    )
}