import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-900 to-purple-500 bg-clip-text text-transparent text-center">
                        Projects
                        </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[0_0_24px_rgba(142,60,210,0.35)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Typing Test Web App</h3>
                        <p className="text-gray-400 mb-4">Secure, responsive typing test web app with user authentication, WPM tracking, and leaderboard comparison across difficulty levels.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["html", "CSS", "javascript", "PHP" , "MySQL"].map((tech,key) => (
                                <span key ={key} className="bg-purple-600/10 text-purple-600 py-1 px-3 rounded-full text-sm  hover:bg-purple-600/40 hover:shadow-[0_2px_8px_rgba(142,60,210,0.2)] transition-all">

                                            {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Calum29d/Typerzz-ADVH-Computing-Project" className="text-purple-600 font-medium hover:text-purple-500 transistion-colors my-4">View Project<i className="fa-brands fa-square-github fa-xl"></i></a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[0_0_24px_rgba(142,60,210,0.35)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                        <p className="text-gray-400 mb-4">This very website you're on served as my introduction to React and as a way to increase my proficiency with TailwindCSS.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS", "javascript", "html"].map((tech,key) => (
                                <span key ={key} className="bg-purple-600/10 text-purple-600 py-1 px-3 rounded-full text-sm  hover:bg-purple-600/40 hover:shadow-[0_2px_8px_rgba(142,60,210,0.2)] transition-all">
                                            {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Calum29d/MyPortfolio" className="text-purple-600 font-medium hover:text-purple-500 transistion-colors my-4">View Project<i className="fa-brands fa-square-github fa-xl"></i></a>
                            
                        </div>
                    </div>
                </div>               
                </div>
            </RevealOnScroll>
        </section>
    );
};