export default function Projects() {

    const projects = [
        { 
            title: "Project Management and Inventory System for Calauan Glass and Aluminum Supply", 
            description: "Project Management and Inventory System for Calauan Glass and Aluminum Supply is a web-based application designed to streamline project management and inventory tracking for Calauan Glass and Aluminum Supply. The system allows users to efficiently manage projects, track inventory levels, and generate reports.", 
            image: "/images/project1.png"
        },
        { 
            title: "Slithering Speller", 
            description: "Slithering Speller is an educational game designed to help users improve their spelling skills in an engaging and interactive way. Players navigate a snake through a series of letters to form correct words, enhancing their vocabulary and spelling abilities while having fun.", 
            image: "/images/project2.png"
        },
    ];

    return (
        <section id="projects" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
            <div className="container grid grid-cols-3 gap-6">
                <div className="col-span-3 text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold">My <span className="bg-white px-3 py-1 text-blue-400 rounded">Projects</span></h1>
                </div>
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300 hover:scale-105">
                        <img src={project.image} alt={project.title} className="w-full h-55 object-cover mb-4 rounded" />
                        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-300">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { Projects };