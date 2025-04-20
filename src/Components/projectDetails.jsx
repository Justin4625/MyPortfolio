import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
    const { id } = useParams();

    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <div className="text-center text-red-500 text-2xl font-bold mt-20">Project not found</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-900 via-black to-red-800 text-gray-100 px-6 py-12">
            <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold mb-6 text-red-400 text-center">{project.title}</h1>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectDetails;