export default function Skill() {
    const skills = [
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "Laravel", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Git / GitHub", level: "Intermediate" },
    ];

    return (
        <section
            id="skills"
            className="relative overflow-hidden min-h-screen text-gray-100 px-6 py-10"
        >

            {/* 🧠 Content */}
            <div className="relative z-10 container text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                    My{" "}
                    <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-transparent bg-clip-text">
                        Skills
                    </span>
                </h1>
                <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                    Here are some of the technologies and tools I use to design, develop, and deliver quality web applications.
                </p>

                {/* 🧩 Skill Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#0f172a]/80 border border-[#1e293b] text-center p-6 rounded-lg shadow-md 
                         hover:shadow-blue-900/40 hover:scale-105 transition-all duration-300 w-40"
                        >
                            <h2 className="text-xl font-semibold text-blue-300">{skill.name}</h2>
                            <p className="text-sm text-gray-400 mt-2">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Skill };
