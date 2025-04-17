function Experience() {
    const technologies = [
        { name: "HTML", img: "/MyPortfolio/iconImages/HTML5.webp", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", img: "/MyPortfolio/iconImages/CSS.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "PHP", img: "/MyPortfolio/iconImages/PHP-logo.svg.png", url: "https://www.php.net/" },
        { name: "Javascript", img: "/MyPortfolio/iconImages/js.png", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React", img: "/MyPortfolio/iconImages/react.png", url: "https://reactjs.org/" },
        { name: "Tailwind CSS", img: "/MyPortfolio/iconImages/tailwindcss.png", url: "https://tailwindcss.com/" },
        { name: "Node.js", img: "/MyPortfolio/iconImages/nodejs.png", url: "https://nodejs.org/" },
        { name: "Express.js", img: "/MyPortfolio/iconImages/express.png", url: "https://expressjs.com/" },
        { name: "Laravel", img: "/MyPortfolio/iconImages/laravel.png", url: "https://laravel.com/" },
        { name: "SQL", img: "/MyPortfolio/iconImages/sql.webp", url: "https://www.w3schools.com/sql/" },
        { name: "Excalibur.js", img: "/MyPortfolio/iconImages/excalibur.png", url: "https://excaliburjs.com/" },
        { name: "MongoDB", img: "/MyPortfolio/iconImages/mongodb.svg", url: "https://www.mongodb.com/" },
        { name: "Postman", img: "/MyPortfolio/iconImages/postman.webp", url: "https://www.postman.com/" },
        { name: "GitHub", img: "/MyPortfolio/iconImages/github.png", url: "https://github.com/" },
    ];

    return (
        <main
            id="experience"
            className="bg-gradient-to-br from-purple-900 via-black to-gray-900 min-h-screen flex flex-col justify-center items-center px-6 text-center text-white"
        >
            <header>
                <h1 className="text-4xl font-extrabold mb-4 mt-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-glow">
                    Mijn Ervaring
                </h1>
                <p className="text-lg text-gray-300 max-w-xl leading-relaxed font-pixel">
                    Hieronder vind je een overzicht van de technologieën en tools waarmee ik ervaring heb en die ik
                    regelmatig gebruik in mijn projecten. Daarnaast sta ik altijd open om nieuwe technologieën te
                    ontdekken en uit te proberen.
                </p>
            </header>

            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 mb-10 w-full max-w-5xl">
                {technologies.map((tech, index) => (
                    <a
                        key={index}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.8)] hover:shadow-[0_0_30px_rgba(0,255,255,1)] hover:scale-110 transition-transform duration-300 border-2 border-cyan-500 font-pixel"
                    >
                        <img
                            src={tech.img}
                            alt={`${tech.name} logo`}
                            className="w-20 h-20 mb-4 object-contain"
                        />
                        <p className="text-lg font-semibold text-cyan-400">{tech.name}</p>
                    </a>
                ))}
            </section>
        </main>
    );
}

export default Experience;