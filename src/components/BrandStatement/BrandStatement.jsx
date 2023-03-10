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
        // <div class="sticky-container">
        //     <div class="sticky-outer">
        //         <div class="sticky">
        //             <svg width="0" height="0">
        //                 <defs>
        //                     <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
        //                         <path
        //                             d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
        //                             stroke-linejoin="round"
        //                             stroke-linecap="square"
        //                         />
        //                     </clipPath>
        //                 </defs>
        //             </svg>
        //             <div class="sticky-content">
        //                 I study front end development and create web apps
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}