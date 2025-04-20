import { Link } from "react-router-dom";
import projects from "./data/projects.js";

function Projects() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-900 via-black to-yellow-800 text-gray-100 px-6 py-12 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-20 mix-blend-overlay"
                aria-hidden="true"
            ></div>

            <h1 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 animate-glow">
                Mijn Projecten
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-yellow-400">{project.title}</h2>
                        <img src={project.image} alt={project.title} className="mb-4 rounded-lg" />
                        <Link
                            to={`/projecten/${project.id}`}
                            className="text-base font-bold text-yellow-400 px-3 py-1.5 rounded-md transition-transform transform hover:scale-105 hover:bg-yellow-800 hover:text-white border border-yellow-500 mx-auto block text-center"
                        >
                            Bekijk project
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;