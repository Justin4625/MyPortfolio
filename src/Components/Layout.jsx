import { Link, Outlet } from "react-router";
import Footer from "./Footer.jsx";

function Layout() {
    return (
        <>
            <nav className="relative bg-black bg-opacity-100 p-4 shadow-lg font-pixel">
                <div
                    className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-20 mix-blend-overlay rounded-lg"
                    aria-hidden="true"
                ></div>
                <div className="relative z-10 flex justify-center space-x-8">
                    <Link
                        to={"/"}
                        className="text-lg font-bold text-cyan-400 px-4 py-2 rounded-lg transition-transform transform hover:scale-110 hover:bg-cyan-800 hover:text-white border-2 border-cyan-500"
                    >
                        Home
                    </Link>
                    <Link
                        to={"/projecten"}
                        className="text-lg font-bold text-pink-400 px-4 py-2 rounded-lg transition-transform transform hover:scale-110 hover:bg-pink-800 hover:text-white border-2 border-pink-500"
                    >
                        Projecten
                    </Link>
                    <Link
                        to={"/ervaring"}
                        className="text-lg font-bold text-yellow-400 px-4 py-2 rounded-lg transition-transform transform hover:scale-110 hover:bg-yellow-800 hover:text-white border-2 border-yellow-500"
                    >
                        Ervaring
                    </Link>
                    <Link
                        to={"/contact"}
                        className="text-lg font-bold text-green-400 px-4 py-2 rounded-lg transition-transform transform hover:scale-110 hover:bg-green-800 hover:text-white border-2 border-green-500"
                    >
                        Contact
                    </Link>
                </div>
            </nav>
            <main className="bg-gradient-to-br from-black via-gray-900 to-purple-900 min-h-screen text-white font-pixel">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;