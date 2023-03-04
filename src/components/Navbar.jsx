import { NavLink } from "react-router-dom";


export default function Navbar () {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}