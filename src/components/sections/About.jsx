
export const About = () =>{

    const frontendSkills = ["React" , "Javascript", "TailwindCSS", "Javascript"];

    const backendSkills = ["Java", "Python", "PHP", "SQL"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-400 mb-6">
                    Passionate developer with experience in building scalable web apps and creating innovative solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key ={key} className="bg-purple-600/10 text-purple-600 py-1 px-3 rounded-full text-sm hover:bg-purple-600/40 hover:shadow-[0_2px_8px_rgba(142,60,210,0.2)] transition">

                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key ={key} className="bg-purple-600/10 text-purple-600 py-1 px-3 rounded-full text-sm hover:bg-purple-600/40 hover:shadow-[0_2px_8px_rgba(142,60,210,0.2)] transition">

                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-6">
                <h3 className="text-xl font-bold mb-4 ">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>BSc (Hons) in Computer Science </strong> - University Of Dundee (2025-2029)
                    </li>
                    <li>
                        <strong>Relevant Coursework:</strong> Data Structures, Object Oriented Programming, Web development
                    </li>
                </ul>
            </div>     
          
        </div>
    </section>
};