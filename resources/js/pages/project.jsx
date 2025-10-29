export default function Projects() {

    const projects = [
        {
            title: "Project Management and Inventory System for Calauan Glass and Aluminum Supply",
            description: "A web-based system designed to streamline project management and inventory tracking for Calauan Glass and Aluminum Supply. It helps manage projects, monitor stock, and generate detailed reports efficiently.",
            image: "/images/project1.png"
        },
        {
            title: "Slithering Speller",
            description: "An educational snake game that helps players improve their spelling by forming correct words while playing — combining fun and learning in one engaging experience.",
            image: "/images/project2.png"
        },
    ];

    return (
        <section
            id="projects"
            className="relative min-h-screen px-6 py-10 overflow-hidden text-white"
        >

            <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
                <div className="col-span-full text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        My{" "}
                        <span className="px-4 py-1 rounded bg-[#0f172a] text-blue-400 shadow-lg shadow-blue-900/40">
                            Projects
                        </span>
                    </h1>
                </div>

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#0f172a]/90 backdrop-blur-sm p-6 rounded-xl shadow-md 
                       hover:shadow-2xl hover:shadow-blue-800/40 
                       transition-all duration-300 hover:scale-105 border border-[#1e293b]"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover mb-4 rounded-lg border border-[#1e293b]"
                        />
                        <h2 className="text-xl font-bold mb-2 text-blue-300 text-justify">
                            {project.title}
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed text-justify">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { Projects };
