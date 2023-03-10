import './welcome.css'

export default function Welcome() {
    return (
        <>
            <div className='welcome'>


                <h1>Welcome to my portfolio</h1>
                <h2> I'm <span className='accent'>Andrea Peter</span></h2>
            </div>







            {/* <div class="sticky-container">
                <div class="sticky-outer">
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
                        <div class="sticky-content">
                            <h1>Hello, <br /> I'm <span className="font-accent"> Andrea Peter</span></h1>
                            <h2>Welcome to my portfolio</h2>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}