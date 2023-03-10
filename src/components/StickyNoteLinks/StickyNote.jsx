import './sticky-note.css'
import { NavLink } from 'react-router-dom'

export default function StickyNote(props) {
    return (

        <div class="sticky-container">
            <div className="sticky-outer">
                <div class="sticky">
                    <svg width="0" height="0">
                        <defs>
                            <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                                <path
                                    d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                                    stroke-linejoin="round"
                                    stroke-linecap="square"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="sticky-content">
                        <NavLink to={props.link}>{props.text}</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}