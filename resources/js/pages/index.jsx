import Topbar from "../layouts/topbar";
import About from "./about";
import Project from "./project";
import Skill from "./skill";

export default function Index() {
    return (
        <>
            <div className="bg-gradient-to-b from-[#060b17] via-[#0a1124] to-[#060b17] text-gray-100">
                
                <About />
                <Project />
                <Skill />
            </div>
        </>
    );
}

