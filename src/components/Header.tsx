"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "../contexts/LanguageContext";
import { getPersonalInfo } from "../utils/cvHelpers";

const Header = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const personalInfo = getPersonalInfo(cvData, language);

    return (
        <header className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Información principal */}
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        <Image
                            src="/img/perfil.jpg"
                            alt={`Foto de perfil de ${personalInfo.name}`}
                            width={120}
                            height={120}
                            className="rounded-full border-4 border-orange-500 shadow-lg"
                        />
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                {t.header.title}
                            </h1>
                            <p className="text-xl text-orange-400 mb-4">
                                {t.header.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Información de contacto y switch de idioma */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3 text-sm">
                            <a
                                href={`tel:${personalInfo.phone}`}
                                className="flex items-center gap-2 text-neutral-300 hover:text-orange-400 transition-colors"
                            >
                                <Phone size={16} />
                                {personalInfo.phone}
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-2 text-neutral-300 hover:text-orange-400 transition-colors"
                            >
                                <Mail size={16} />
                                {personalInfo.email}
                            </a>
                            <div className="flex items-center gap-2 text-neutral-300">
                                <MapPin size={16} />
                                {personalInfo.location}
                            </div>
                        </div>

                        {/* Language Switch */}
                        <div className="flex justify-center lg:justify-end">
                            <LanguageSwitch />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
