function Projects() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-900 via-black to-yellow-800 text-gray-100 px-6 py-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-20 mix-blend-overlay"
                aria-hidden="true"
            ></div>

            <h1 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 animate-glow">
                Mijn Projecten
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                <div
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Taalmodel (Binnenkort)</h2>
                    <img src="./projectImages/test.png" alt="project 10" className="mb-4 rounded-lg"/>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">Bekijk project</a>
                </div>
                <div
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Beeldherkenning model</h2>
                    <img src="./projectImages/Beeldherkenning.png" alt="project 9" className="mb-4 rounded-lg"/>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">Bekijk project</a>
                </div>
                <div
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Hotspots (Binnenkort)</h2>
                    <img src="./projectImages/test.png" alt="project 8" className="mb-4 rounded-lg"/>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">Bekijk project</a>
                </div>
                <div
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Nederlandse Gebarentaal</h2>
                    <img src="./projectImages/NederlandseGebarentaal.png" alt="project 7" className="mb-4 rounded-lg"/>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">Bekijk project</a>
                </div>
                <div
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Open Hiring</h2>
                    <img src="./projectImages/OpenHiring.png" alt="project 6" className="mb-4 rounded-lg"/>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">Bekijk project</a>
                </div>
                <div
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Pokémon Compendium</h2>
                    <img src="./projectImages/Pokemoncompendium.png" alt="project 5" className="mb-4 rounded-lg"/>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">Bekijk project</a>
                </div>
                <div
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Shinydex</h2>
                    <img src="./projectImages/Shinydex.png" alt="project 4" className="mb-4 rounded-lg"/>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">Bekijk project</a>
                </div>
                <div
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Earthifacts</h2>
                    <img src="./projectImages/Earthifacts.png" alt="project 3" className="mb-4 rounded-lg"/>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">Bekijk project</a>
                </div>
                <div
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Space Chicken</h2>
                    <img src="./projectImages/Spacechicken.png" alt="project 2" className="mb-4 rounded-lg"/>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">Bekijk project</a>
                </div>
                <div
                    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-4 text-yellow-400">Vakantiebestemmingen</h2>
                    <img src="./projectImages/Vakantiebestemmingen.png" alt="project 1" className="mb-4 rounded-lg"/>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">Bekijk project</a>
                </div>
                {/* Voeg meer projecten toe */}
            </div>
        </div>
    );
}

export default Projects;