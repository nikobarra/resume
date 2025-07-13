"use client";

import { Heart, Code, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Información del desarrollador */}
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Code className="w-5 h-5 text-blue-400" />
                        <span className="text-sm">
                            Desarrollado con{" "}
                            <Heart className="inline w-4 h-4 text-red-500 mx-1" />{" "}
                            por{" "}
                            <a
                                href="mailto:nicolasbarrapelecano@gmail.com"
                                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                            >
                                Nicolás M. Barra Pelecano
                            </a>
                        </span>
                    </div>

                    {/* Enlaces sociales */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/nikobarra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nicolaspelecano/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:nicolasbarrapelecano@gmail.com"
                            className="text-gray-300 hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Tecnologías utilizadas */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-400 mb-2">
                        Construido con Next.js, React, TypeScript y TailwindCSS
                    </p>
                    <p className="text-xs text-gray-500">
                        © {currentYear} Nicolás M. Barra Pelecano. Todos los
                        derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
