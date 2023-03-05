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

export default function ProjectCard(props) {
    return (
        <>
     
        <MDBCard className="col-md-5 col-lg-3 col-sm-10">
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                <NavLink to="/project">
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </NavLink>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{props.projectName}</MDBCardTitle>
                <MDBCardText>
                    {props.description}
                </MDBCardText>
                {/* <MDBBtn href='#'>Button</MDBBtn> */}
            </MDBCardBody>
            <MDBListGroup flush>
                <MDBListGroupItem>{props.tech1}</MDBListGroupItem>
                <MDBListGroupItem>{props.tech2}</MDBListGroupItem>
                <MDBListGroupItem>{props.tech3}</MDBListGroupItem>
            </MDBListGroup>
            <MDBCardBody>
                <MDBCardLink href='#'>{props.github}</MDBCardLink>
                <MDBCardLink href='#'>{props.live}</MDBCardLink>
            </MDBCardBody>
        </MDBCard>

        </>
    );
}