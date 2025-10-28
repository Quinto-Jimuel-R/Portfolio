import { Link } from "@inertiajs/react";
export default function Topbar() {
    return (
        <header className="topbar">
            <div className="container">
                <h1>My Portfolio</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="#home">Home</Link>
                        </li>
                        <li>
                            <Link href="#about">About</Link>
                        </li>
                        <li>
                            <Link href="#experience">Experience</Link>
                        </li>
                        <li>
                            <Link href="#skills">Skills</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export {Topbar};