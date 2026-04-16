

export const Home = () =>{

    return <section id="home" className="min-h-screen flex items-center justify-center relative">

        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-purple-500 bg-clip-text text-transparent leading-tight">
                Hi, I'm Calum
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm currently a first year Computer Science student at the University Of Dundee, with strong aspirations to become a <span className="text-purple-500 font-bold">Software Engineer.</span> I'm passionate about problem-solving and building efficient, scalable systems.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className = "bg-purple-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(142,60,210,0.4)]">View Projects
                </a>

                <a href="" className = "border border-purple-600/50 text-purple-600 py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(142,60,210,0.2)] hover:bg-purple-600/10">Download CV
                </a>

                

            </div>
        </div>
    </section>
};