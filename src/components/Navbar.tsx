"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getPersonalInfo } from "../utils/cvHelpers";
import LanguageSwitch from "./LanguageSwitch";
import { useDialogFocus } from "../hooks/useDialogFocus";

const Navbar = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();
    const info = getPersonalInfo(cvData, language);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const menuRef = useRef<HTMLDivElement>(null);
    const closeMenu = useCallback(() => setIsOpen(false), []);
    useDialogFocus(isOpen, menuRef, closeMenu);

    // Detectar scroll para cambiar el estilo de la navbar
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Detectar sección activa: la que cruza la franja superior del viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-80px 0px -70% 0px" }
        );
        document
            .querySelectorAll("section[id]")
            .forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const navItems = [
        { id: "perfil", label: t.nav.perfil, href: "#perfil" },
        { id: "habilidades", label: t.nav.habilidades, href: "#habilidades" },
        { id: "experiencia", label: t.nav.experiencia, href: "#experiencia" },
        { id: "proyectos", label: t.nav.proyectos, href: "#proyectos" },
        { id: "educacion", label: t.nav.educacion, href: "#educacion" },
        {
            id: "certificaciones",
            label: t.nav.certificaciones,
            href: "#certificaciones",
        },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            element.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth",
            });
        }
        setIsOpen(false);
    };

    return (
        <>
            <a
                href="#contenido"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-accent focus:text-black focus:font-semibold"
            >
                {t.common.skipToContent}
            </a>

            {/* Navbar fija */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                    isScrolled
                        ? "bg-surface/95 backdrop-blur-md border-b border-raised"
                        : "bg-canvas"
                }`}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Nombre */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-3"
                        >
                            <div className="w-8 h-8 bg-accent rounded-full shrink-0 flex items-center justify-center">
                                <span className="text-black font-bold text-sm">
                                    N
                                </span>
                            </div>
                            <span className="text-white font-semibold text-lg whitespace-nowrap">
                                Nicolás Barra
                            </span>
                        </motion.div>

                        {/* Navegación desktop */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`relative px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                                        activeSection === item.id
                                            ? "text-accent-soft"
                                            : "text-soft hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-soft"
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
                                aria-label={t.common.menu}
                                aria-expanded={isOpen}
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden p-3 rounded-lg bg-raised hover:bg-line transition-colors"
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
                        className="fixed inset-0 z-40 lg:hidden"
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
                            ref={menuRef}
                            role="dialog"
                            aria-modal="true"
                            aria-label={t.common.menu}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                            }}
                            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-surface border-l border-raised"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-xl font-bold text-white">
                                        {t.common.menu}
                                    </h2>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={closeMenu}
                                        aria-label={t.certificaciones.close}
                                        className="p-3 rounded-lg bg-raised hover:bg-line transition-colors"
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
                                                    ? "bg-accent/20 text-accent-soft"
                                                    : "text-soft hover:text-white hover:bg-raised"
                                            }`}
                                        >
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </nav>

                                {/* Información adicional en móvil */}
                                <div className="mt-8 pt-8 border-t border-raised">
                                    <h3 className="text-sm font-medium text-muted mb-4">
                                        {t.common.contact}
                                    </h3>
                                    <div className="space-y-2 text-sm text-soft">
                                        <p>{info.email}</p>
                                        <p>{info.phone}</p>
                                        <p>{info.location}</p>
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
