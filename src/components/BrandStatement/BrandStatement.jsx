import './brand-statement.css'
import { NavLink } from 'react-router-dom'

export default function BrandStatement() {
    return (
        <div className='statement'>
            <p>I study <span className='small-accent'>front end development</span></p>
            <p> and build web apps</p>
            <div>
                Click 
                <NavLink to='about' > here </NavLink>
                if you'd like to read more
            </div>



        </div>

    )
}