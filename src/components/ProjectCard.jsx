import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Project from './pages/Project';

export default function ProjectCard() {
    return (
        <>
        {/* <Router>
            <Routes>
            <Route path="project" element={<Project />} />
            </Routes>
        </Router> */}
        <MDBCard className="col-md-5 col-lg-3 col-sm-10">
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                <NavLink to="/project">
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </NavLink>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                {/* <MDBBtn href='#'>Button</MDBBtn> */}
            </MDBCardBody>
            <MDBListGroup flush>
                <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </MDBListGroup>
            <MDBCardBody>
                <MDBCardLink href='#'>Card link</MDBCardLink>
                <MDBCardLink href='#'>Card link</MDBCardLink>
            </MDBCardBody>
        </MDBCard>

        </>
    );
}