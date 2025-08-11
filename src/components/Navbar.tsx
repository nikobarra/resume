"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
    const { t } = useTranslations();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Detectar scroll para cambiar el estilo de la navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Detectar sección activa
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollPos = window.scrollY + 100;

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                const sectionId = section.getAttribute("id");

                if (
                    scrollPos >= sectionTop &&
                    scrollPos < sectionTop + sectionHeight
                ) {
                    setActiveSection(sectionId || "");
                }
            });
        };

        window.addEventListener("scroll", handleScrollSpy);
        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, []);

    const navItems = [
        { id: "perfil", label: t.perfil.title, href: "#perfil" },
        { id: "habilidades", label: t.habilidades.title, href: "#habilidades" },
        { id: "experiencia", label: t.experiencia.title, href: "#experiencia" },
        { id: "proyectos", label: t.proyectos.title, href: "#proyectos" },
        { id: "educacion", label: t.educacion.title, href: "#educacion" },
        {
            id: "certificaciones",
            label: t.certificaciones.title,
            href: "#certificaciones",
        },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* Navbar fija */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Nombre */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-3"
                        >
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                    N
                                </span>
                            </div>
                            <span className="text-white font-semibold text-lg">
                                Nicolás Barra
                            </span>
                        </motion.div>

                        {/* Navegación desktop */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                        activeSection === item.id
                                            ? "text-orange-400"
                                            : "text-neutral-300 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Controles */}
                        <div className="flex items-center space-x-4">
                            <LanguageSwitch />

                            {/* Botón menú móvil */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
                            >
                                <AnimatePresence mode="wait">
                                    {isOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{
                                                rotate: -90,
                                                opacity: 0,
                                            }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X
                                                size={20}
                                                className="text-white"
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu
                                                size={20}
                                                className="text-white"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Menú móvil */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        />

                        {/* Menú */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                            }}
                            className="absolute right-0 top-0 h-full w-80 bg-neutral-900 border-l border-neutral-800"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-xl font-bold text-white">
                                        Menú
                                    </h2>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
                                    >
                                        <X size={20} className="text-white" />
                                    </motion.button>
                                </div>

                                <nav className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ x: 10 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                scrollToSection(item.href)
                                            }
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                                                activeSection === item.id
                                                    ? "bg-orange-500/20 text-orange-400 border-l-4 border-orange-500"
                                                    : "text-neutral-300 hover:text-white hover:bg-neutral-800"
                                            }`}
                                        >
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </nav>

                                {/* Información adicional en móvil */}
                                <div className="mt-8 pt-8 border-t border-neutral-800">
                                    <h3 className="text-sm font-medium text-neutral-400 mb-4">
                                        Contacto
                                    </h3>
                                    <div className="space-y-2 text-sm text-neutral-300">
                                        <p>nicolasbarrapelecano@gmail.com</p>
                                        <p>+54 2266-440616</p>
                                        <p>Mar del Plata, Buenos Aires</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
