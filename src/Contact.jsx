function Contact() {
    return (
        <main
            id="contact"
            className="bg-gradient-to-br from-teal-900 via-black to-indigo-900 min-h-screen flex flex-col justify-center items-center px-6 text-center text-white font-pixel"
        >
            <header>
                <h1 className="text-4xl font-extrabold mb-4 mt-10 bg-gradient-to-r from-orange-500 via-teal-500 to-yellow-500 text-transparent bg-clip-text animate-glow">
                    📬 Contact Informatie
                </h1>
                <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                    Neem gerust contact met me op via onderstaande kanalen.
                </p>
            </header>

            <section className="mt-8 space-y-6 w-full max-w-3xl">
                {/* LinkedIn Box */}
                <div
                    className="flex items-center space-x-6 bg-gray-800 p-8 rounded-lg shadow-[0_0_15px_rgba(255,165,0,0.8)] hover:shadow-[0_0_30px_rgba(255,165,0,1)] hover:scale-110 transition-transform duration-300 border-2 border-orange-500">
                    <img
                        src="/MyPortfolio/iconImages/LinkedIn.png"
                        alt="LinkedIn Logo"
                        className="w-16 h-16"
                    />
                    <a
                        href="https://www.linkedin.com/in/justin-cheung-developer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-orange-400 hover:underline"
                    >
                        Justin Cheung
                    </a>
                </div>

                {/* Gmail Box */}
                <div
                    className="flex items-center space-x-6 bg-gray-800 p-8 rounded-lg shadow-[0_0_15px_rgba(0,255,127,0.8)] hover:shadow-[0_0_30px_rgba(0,255,127,1)] hover:scale-110 transition-transform duration-300 border-2 border-green-500">
                    <img
                        src="/MyPortfolio/iconImages/Gmail.png"
                        alt="Gmail Logo"
                        className="w-16 h-16"
                    />
                    <a
                        href="mailto:kinhanjustin@gmail.com"
                        className="text-xl font-semibold text-green-400 hover:underline"
                    >
                        kinhanjustin@gmail.com
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Contact;