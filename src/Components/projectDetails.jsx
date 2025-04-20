import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
    const { id } = useParams();

    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <div className="text-center text-red-500 text-2xl font-bold mt-20">Project not found</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 px-6 py-12">
            <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold mb-6 text-yellow-400 text-center">{project.title}</h1>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto mb-6 rounded-lg shadow-md"
                />
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="text-center">
                    <a
                        href={project.link}
                        className="inline-block bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-300 hover:shadow-lg transition-transform transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Bekijk project
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;