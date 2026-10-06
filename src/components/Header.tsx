"use client";

import Image from "next/image";
import { Mail, MapPin, Download, Github, Linkedin, Globe } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getPersonalInfo, toUrl } from "../utils/cvHelpers";

const CV_PATH = "/CV-Nicolas-Barra-Pelecano.pdf";

const Header = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const info = getPersonalInfo(cvData, language);

    const socials = [
        { label: "GitHub", href: toUrl(info.github), icon: Github },
        { label: "LinkedIn", href: toUrl(info.linkedin), icon: Linkedin },
        { label: info.website, href: toUrl(info.website), icon: Globe },
    ];

    return (
        <header className="w-full bg-surface border-b border-raised py-12 lg:py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <Image
                        src="/img/perfil_new.jpeg"
                        alt={`Foto de perfil de ${info.name}`}
                        width={144}
                        height={144}
                        priority
                        className="rounded-full border-4 border-accent shrink-0"
                    />
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3 text-balance">
                            {info.name}
                        </h1>
                        <p className="text-lg lg:text-xl text-accent-soft mb-6 text-balance">
                            {info.title}
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                            <a
                                href={CV_PATH}
                                download
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-soft text-black font-semibold px-5 py-3 rounded-lg transition-colors"
                            >
                                <Download size={18} />
                                {t.header.downloadCV}
                            </a>
                            <a
                                href={`mailto:${info.email}`}
                                className="inline-flex items-center gap-2 border border-line-strong hover:border-accent-soft hover:text-accent-soft text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                            >
                                <Mail size={18} />
                                {t.header.contact}
                            </a>
                        </div>

                        <ul className="flex flex-wrap justify-center lg:justify-start gap-x-5 text-sm text-soft">
                            {socials.map(({ label, href, icon: Icon }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 min-h-11 hover:text-accent-soft transition-colors"
                                    >
                                        <Icon size={16} />
                                        {label}
                                    </a>
                                </li>
                            ))}
                            <li className="inline-flex items-center gap-2 min-h-11">
                                <MapPin size={16} />
                                {info.location}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
