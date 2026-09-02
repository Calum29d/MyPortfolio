import FileSaver from "file-saver";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () =>{

    const saveFile = () => {
        FileSaver.saveAs(
            import.meta.env.BASE_URL + "/resource/Calum-CV.pdf",
            "Calum-CV.pdf"
        );
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>


                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-paper leading-tight">
                        Hi, I'm Calum
                    </h1>

                    <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
                        I'm currently a second year Computer Science student at the University Of Dundee, with strong aspirations to become a <span className="text-accent font-bold">Software Engineer.</span> I'm passionate about problem-solving and building efficient, scalable systems.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className = "bg-accent text-ink py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-accent/90">View Projects
                        </a>

                        <button  className = "border border-accent/40 text-accent py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/10 cursor-pointer" onClick={saveFile}>Download CV
                        </button>



                    </div>

                    <a href="mailto:calumdavies08@gmail.com" className="inline-flex items-center gap-2 text-muted mt-8 hover:text-accent transition">
                        <i className="fa-solid fa-envelope text-accent"></i> calumdavies08@gmail.com
                    </a>
                </div>
            </RevealOnScroll>
        </section>
    );
};