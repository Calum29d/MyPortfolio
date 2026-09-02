import { useEffect } from "react";


export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
    <nav className="fixed top-0 w-full bg-[rgba(18,18,18,0.6)] backdrop-blur-lg border-b border-line shadow-lg z-40">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-paper">
                    Calum Davies
                </a>

                <div className="w-7 h-5 relative cursor-pointer md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-muted hover:text-paper transition-colors"> Home </a>
                    <a href="#about" className="text-muted hover:text-paper transition-colors"> About </a>
                    <a href="#projects" className="text-muted hover:text-paper transition-colors"> Projects </a>
                    <a href="#contact" className="text-muted hover:text-paper transition-colors"> Contact </a>

                </div>
            </div>
        </div>
    </nav>
    );
}