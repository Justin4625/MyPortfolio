import { useState, useEffect } from "react";

function Home() {
    const [background, setBackground] = useState("from-blue-900 via-black to-green-900");

    useEffect(() => {
        const backgrounds = [
            "from-blue-900 via-black to-green-900",
            "from-purple-900 via-black to-red-900",
            "from-yellow-900 via-black to-cyan-900",
            "from-pink-900 via-black to-indigo-900",
        ];

        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % backgrounds.length;
            setBackground(backgrounds[index]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main
            id="home"
            className={`bg-gradient-to-br ${background} h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden font-pixel text-white transition-all duration-1000`}
        >
            <div
                className="absolute inset-0 bg-[url('/path-to-pattern.png')] opacity-20 mix-blend-overlay"
                aria-hidden="true"
            ></div>

            <header>
                <h1 className="text-6xl font-extrabold mb-6 transform -skew-y-3 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-500 text-transparent bg-clip-text animate-glow">
                    Welkom, ik ben <span className="text-yellow-400 glow">Justin Cheung</span>
                </h1>
            </header>

            <section aria-labelledby="about-me">
                <h2 id="about-me" className="sr-only">About Me</h2>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed font-semibold">
                    Ik ben een <span className="text-red-500">front-end developer</span> met een sterke interesse in technologie.
                    Het ontwerpen en bouwen van websites en apps die zowel mooi als gebruiksvriendelijk zijn,
                    is waar ik me echt in kan verliezen.
                </p>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mt-4 font-semibold">
                    Momenteel studeer ik <span className="text-purple-500">Creative Media and Game Technologies</span> aan de Hogeschool Rotterdam.
                    Tijdens mijn studie krijg ik de kans om me verder te ontwikkelen op het gebied van webontwikkeling,
                    design en, wie weet, ooit ook game development.
                </p>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mt-4 font-semibold">
                    Op dit moment ben ik op zoek naar een stage in <span className="text-green-500">front-end development / web development</span>,
                    maar ik heb ook zeker interesse in UX en UI design. En ik sta ook open om buiten dat gebied te gaan oriënteren.
                </p>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mt-4 font-semibold">
                    Het belangrijkste voor mij is het creëren van <span className="text-yellow-500">digitale ervaringen</span> die echt iets toevoegen voor de
                    eindgebruikers.
                </p>
            </section>
        </main>
    );
}

export default Home;
