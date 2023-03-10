import Welcome from "../Welcome/Welcome";
import BrandStatement from "../BrandStatement/BrandStatement";
import StickyNote from "../StickyNoteLinks/StickyNote";

export default function Home() {
    return <>
       <Welcome/>
       <BrandStatement/>
       <StickyNote text='Check out my projects'/>
       <StickyNote text='Get in touch'/>
    </>
}