import ProjectCard from "@/components/ProjectCard";

export default function Main() {
    const skills = [
        { name: 'HTML', icon: 'fa-html5', type: 'brand', color: 'text-orange-500', percentage: 85, side: 'left' },
        { name: 'JavaScript', icon: 'fa-js', type: 'brand', color: 'text-yellow-500', percentage: 50, side: 'right' },
        { name: 'CSS', icon: 'fa-css3-alt', type: 'brand', color: 'text-blue-600', percentage: 60, side: 'left' },
        { name: 'PHP', icon: 'fa-php', type: 'brand', color: 'text-indigo-400', percentage: 75, side: 'right' },
        { name: 'Laravel', icon: 'fa-laravel', type: 'brand', color: 'text-red-500', percentage: 60, side: 'right' },
        { name: 'Bootstrap', icon: 'fa-bootstrap', type: 'brand', color: 'text-purple-600', percentage: 75, side: 'left' },
        { name: 'React', icon: 'fa-react', type: 'brand', color: 'text-cyan-400', percentage: 30, side: 'left' },
        { name: 'Github', icon: 'fa-github', type: 'brand', color: 'text-gray-800', percentage: 60, side: 'right' },
    ];

    const leftSkills = skills.filter(skill => skill.side === 'left');
    const rightSkills = skills.filter(skill => skill.side === 'right');

    const pmisImages = Array.from({ length: 17 }, (_, i) => 
    `/images/pmis/pmis-${i + 1}.png`
    );

    const renderSkills = (skillList, animation) => {
        return skillList.map((skill, index) => {
            const iconClass = skill.type === 'solid' ? 'fa-solid' : 'fa-brands';

            const progressColor =
                skill.color === 'text-orange-500' ? 'bg-orange-500' :
                    skill.color === 'text-blue-600' ? 'bg-blue-600' :
                        skill.color === 'text-red-500' ? 'bg-red-500' :
                            skill.color === 'text-indigo-400' ? 'bg-indigo-400' :
                                skill.color === 'text-purple-500' ? 'bg-purple-500' :
                                    skill.color === 'text-purple-600' ? 'bg-purple-600' :
                                        skill.color === 'text-yellow-500' ? 'bg-yellow-500' :
                                            skill.color === 'text-cyan-400' ? 'bg-cyan-400' :
                                                skill.color === 'text-gray-800' ? 'bg-gray-800' :
                                                    'bg-gray-500';

            return (
                <div
                    key={index}
                    className={`flex items-center gap-2 transition-transform duration-300 ${animation} hover:scale-105 hover:cursor-pointer`}
                >
                    <span className="w-fit bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:scale-110 flex items-center gap-2">
                        <i className={`${iconClass} ${skill.icon} text-2xl ${skill.color}`}></i>

                        <div className="w-24 bg-gray-300 rounded-full h-4 flex items-center justify-center relative">
                            <div
                                className={`h-4 rounded-full absolute left-0 ${progressColor}`}
                                style={{ width: `${skill.percentage}%` }}
                            ></div>
                            <span className="text-xs font-bold text-white relative z-10">
                                {skill.percentage}%
                            </span>
                        </div>
                    </span>
                </div>
            );
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">

            {/* ABOUT */}
            <section id="about" className="mb-12 animate-fade-in">
                <h2 className="text-2xl font-bold mb-1">PROFESSIONAL SUMMARY</h2>

                <p className="text-gray-900 border-l-4 border-blue-500 pl-4 transition-all duration-1000">
                    Lead Full-Stack Web Developer during Capstone Project. Proficient in HTML, CSS, JavaScript,
                    jQuery, AJAX, MySQL, Bootstrap and PHP. Successfully developed a fully functional system and
                    delivered 100% of the project requirements with high quality results.
                </p>
            </section>

            {/* SKILLS */}
            <section id="skills" className="mb-12 animate-fade-in [animation-delay:200ms]">
                <h2 className="text-2xl font-bold mb-1">SKILLS</h2>

                <div className="flex items-center justify-center gap-8 mt-3 min-h-40">
                    <div className="flex flex-col gap-3 justify-center h-full">
                        {renderSkills(leftSkills, "animate-slide-left")}
                    </div>

                    <div className="border-l-4 border-gray-400 h-full min-h-60 rounded"></div>

                    <div className="flex flex-col gap-3 justify-center h-full">
                        {renderSkills(rightSkills, "animate-slide-right")}
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="mb-12 animate-fade-in [animation-delay:400ms]">
                <h2 className="text-2xl font-bold mb-1">PROJECTS</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Project 1 */}
                    <div className="bg-white rounded-lg shadow-md p-4 border-t-3 border-blue-500">
                        <h2 className="text-md font-bold mb-2">Project Management and Inventory System</h2>
                        <ProjectCard
                            images={pmisImages}
                            title="PMIS"
                        />
                        <p className="text-gray-700 mt-2 text-sm">
                            Project Management and Inventory system is built using PHP, MySQL, HTML, CSS, JavaScript, Ajax, jQuery, and Bootstrap.
                        </p>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white rounded-lg shadow-md p-4 border-t-3 border-blue-500">
                        <h2 className="text-md font-bold mb-2">Student Management System</h2>
                        <ProjectCard
                            images={pmisImages}
                            title="SMS"
                        />
                        <p className="text-gray-700 mt-2 text-sm">
                            Project Management and Inventory system is built using PHP, MySQL, HTML, CSS, JavaScript, Ajax, jQuery, and Bootstrap.
                        </p>
                    </div>

                    {/* Add more projects here */}
                </div>
            </section>

        </div>
    );
}