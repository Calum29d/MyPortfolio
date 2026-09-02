import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-paper text-center">
                        Projects
                        </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-line hover:-translate-y-1 hover:border-accent/30 transition-all">
                        <h3 className="text-xl font-bold mb-2">Typing Test Web App</h3>
                        <p className="text-muted mb-4">Secure, responsive typing test web app with user authentication, WPM tracking, and leaderboard comparison across difficulty levels.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["html", "CSS", "javascript", "PHP" , "MySQL"].map((tech,key) => (
                                <span key ={key} className="bg-accent/10 text-accent py-1 px-3 rounded-full text-sm  hover:bg-accent/20 transition-all">

                                            {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Calum29d/Typerzz-ADVH-Computing-Project" className="text-accent font-medium hover:text-accent/80 transistion-colors my-4">View Project<i className="fa-brands fa-square-github fa-xl"></i></a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-line hover:-translate-y-1 hover:border-accent/30 transition-all">
                        <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                        <p className="text-muted mb-4">This very website you're on served as my introduction to React and as a way to increase my proficiency with TailwindCSS.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS", "javascript", "html"].map((tech,key) => (
                                <span key ={key} className="bg-accent/10 text-accent py-1 px-3 rounded-full text-sm  hover:bg-accent/20 transition-all">
                                            {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Calum29d/MyPortfolio" className="text-accent font-medium hover:text-accent/80 transistion-colors my-4">View Project<i className="fa-brands fa-square-github fa-xl"></i></a>

                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-line hover:-translate-y-1 hover:border-accent/30 transition-all">
                        <h3 className="text-xl font-bold mb-2">Pain Scale - Clinical Pain Assessment App </h3>
                        <p className="text-muted mb-4">Mobile app that served as my introduction to Spring Boot and PostgreSQL. It contains account creation (JWT-based), and 4 frequently used pain scales used by doctors. The idea came from a family member that complained they have to calculate patients pain themself using scales on paper.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React Native", "Spring Boot", "PostgreSQL", "TypeScript", "Java"].map((tech,key) => (
                                <span key ={key} className="bg-accent/10 text-accent py-1 px-3 rounded-full text-sm  hover:bg-accent/20 transition-all">
                                            {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://github.com/Calum29d/Pain-Scale" className="text-accent font-medium hover:text-accent/80 transistion-colors my-4">View Project<i className="fa-brands fa-square-github fa-xl"></i></a>

                        </div>
                    </div>
                </div>               
                </div>
            </RevealOnScroll>
        </section>
    );
};