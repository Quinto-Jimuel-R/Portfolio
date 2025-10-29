export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 space-y-10 md:space-y-0 md:space-x-16"
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute w-[600px] h-[600px] bg-[#1E3A8A]/30 rounded-full blur-3xl animate-fogMove1"></div>
                <div className="absolute top-1/2 left-1/3 w-[700px] h-[700px] bg-[#3B82F6]/20 rounded-full blur-3xl animate-fogMove2"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#6366F1]/25 rounded-full blur-3xl animate-fogMove3"></div>
            </div>

            <div className="relative overflow-hidden z-10 w-56 h-56 md:w-72 md:h-72 rounded-full
                      shadow-xl shadow-blue-900/40 border border-[#1E293B]/70">
                <img
                    src="/images/profile.jpg"
                    alt="Jimuel R. Quinto"
                    className="object-cover w-full h-full rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl text-center md:text-left space-y-6 transition-opacity opacity-100 duration-900 lg:grow starting:opacity-0">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Hi, I’m{" "}
                    <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-transparent bg-clip-text">
                        Jimuel R. Quinto
                    </span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed">
                    I’m a passionate web developer who loves building modern, responsive,
                    and interactive web applications.
                </p>

                <div className="flex justify-center md:justify-start space-x-6 mt-8">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-[#0f172a]/90 hover:bg-[#1e293b] rounded-lg font-medium 
                       text-blue-300 border border-[#1e3a8a]/50 transition-all duration-300 
                       shadow-md shadow-blue-900/30"
                    >
                        View My Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-[#3B82F6] text-[#3B82F6] 
                       hover:bg-[#1E3A8A] hover:text-white rounded-lg font-medium 
                       transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export { About };
