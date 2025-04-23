import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import ImageSlideshow from "./ImageSlideshow.jsx";

function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <div className="text-center text-yellow-500 text-2xl font-bold mt-20">Project not found</div>;
    }

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-900 via-black to-yellow-800 text-gray-100 px-6 py-12 relative overflow-hidden">
            <div
                className="max-w-5xl bg-gray-800 p-8 rounded-lg shadow-lg shadow-black/50 border border-gray-700">
                <h1 className="text-4xl font-extrabold mb-6 text-yellow-300 text-center">{project.title}</h1>
                <ImageSlideshow images={project.images} />
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {project.languages && (
                    <div className="mb-6">
                        <h4 className="text-xl font-bold text-yellow-400 mb-2"></h4>
                        <div className="flex gap-4">
                            {project.languages.map((language, index) => (
                                <img
                                    key={index}
                                    src={language}
                                    alt={`Language ${index + 1}`}
                                    className="w-8 h-8"
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-base font-bold text-yellow-400 px-3 py-1.5 rounded-md transition-transform transform hover:scale-105 hover:bg-yellow-800 hover:text-white border border-yellow-500"
                    >
                        &#8592; Terug naar Projecten
                    </button>
                    <div className="flex space-x-4">
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-base font-bold text-white px-3 py-1.5 rounded-md transition-transform transform hover:scale-105 hover:bg-red-800 hover:text-white border border-red-500"
                            >
                                <img
                                    src="/MyPortfolio/iconImages/live.webp"
                                    alt="Live Page logo"
                                    className="w-5 h-5 mr-2"
                                />
                                Live Pagina
                            </a>
                        )}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-base font-bold text-white px-3 py-1.5 rounded-md transition-transform transform hover:scale-105 hover:bg-gray-800 hover:text-white border border-gray-500"
                        >
                            <img
                                src="/MyPortfolio/iconImages/github.png"
                                alt="GitHub logo"
                                className="w-5 h-5 mr-2"
                            />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;