import { Link } from "@inertiajs/react";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
            <div className="max-w-3xl text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Hi, I’m <span className="text-blue-400">Jimuel R. Quinto</span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed">
                    I’m a passionate web developer who loves building modern, responsive,
                    and interactive web applications. I specialize in front-end
                    development using React, Tailwind CSS, and Laravel.
                </p>

                <div className="flex justify-center space-x-6 mt-8">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                    >
                        View My Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-blue-500 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-colors"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export { About };