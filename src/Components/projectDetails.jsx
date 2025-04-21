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
                <ImageSlideshow images={project.images}/>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-base font-bold text-yellow-400 px-3 py-1.5 rounded-md transition-transform transform hover:scale-105 hover:bg-yellow-800 hover:text-white border border-yellow-500"
                    >
                        &#8592; Terug naar Projecten
                    </button>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-base font-bold text-yellow-400 px-3 py-1.5 rounded-md transition-transform transform hover:scale-105 hover:bg-yellow-800 hover:text-white border border-yellow-500"
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
    );
}

export default ProjectDetails;