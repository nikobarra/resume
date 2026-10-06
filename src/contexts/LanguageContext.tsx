"use client";

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import { MotionConfig } from "framer-motion";

type Language = "es" | "en";

const STORAGE_KEY = "portfolio-language";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
}) => {
    const [language, setLanguage] = useState<Language>("es");

    // Al cargar: idioma guardado o, la primera vez, el del navegador
    useEffect(() => {
        let saved: string | null = null;
        try {
            saved = localStorage.getItem(STORAGE_KEY);
        } catch {}
        if (saved === "es" || saved === "en") {
            setLanguage(saved);
        } else if (!navigator.language.toLowerCase().startsWith("es")) {
            setLanguage("en");
        }
    }, []);

    // Mantener el idioma del documento sincronizado para lectores de pantalla
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {}
    };

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage: changeLanguage }}
        >
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </LanguageContext.Provider>
    );
};
