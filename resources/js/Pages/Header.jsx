export default function Header() {
    return (
        <header className="bg-white border-b-2 border-gray-300 py-4 sticky top-0 z-40 animate-fade-in [animation-delay:200ms]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="../images/profile.png"
                            alt="Profile"
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                        />
                        <div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold leading-tight">Jimuel R. Quinto</h2>
                            <p className="text-sm sm:text-base text-gray-500">Full Stack Web Developer</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <a href="mailto:jimuelquinto1@gmail.com" className="group flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm transition">
                            <i className="fas fa-envelope mt-1 w-4 h-4"></i>
                            <span className="hidden sm:inline group-hover:inline">jimuelquinto1@gmail.com</span>
                        </a>
                        <a href="tel:09512444315" className="group flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm transition">
                            <i className="fas fa-phone mt-1 w-4 h-4"></i>
                            <span className="hidden sm:inline group-hover:inline">09512444315</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}