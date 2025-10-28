import Topbar from "../layouts/topbar";
import About from "./about";
import Project from "./project";
import Skill from "./skill";

export default function Index() {
    return (
        <>
            <About />
            <Project />
            <Skill />
        </>
    );
}