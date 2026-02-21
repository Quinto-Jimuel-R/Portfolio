import Header from "./Header";
import Main from "./Main";

export default function Layout({ children }) {
    return (
        <div className="px-4 sm:px-6 lg:px-50 py-6 sm:py-10">
            <div className="min-h-screen flex flex-col">
                <nav>
                    <Header />
                </nav>
                <main className="flex-grow w-full">
                    <Main />
                </main>
            </div>
        </div>
    );
}