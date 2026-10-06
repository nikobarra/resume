"use client";

import { Code, Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getPersonalInfo, toUrl } from "../utils/cvHelpers";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();
    const info = getPersonalInfo(cvData, language);

    const socials = [
        { label: "GitHub", href: toUrl(info.github), icon: Github, external: true },
        { label: "LinkedIn", href: toUrl(info.linkedin), icon: Linkedin, external: true },
        { label: "Email", href: `mailto:${info.email}`, icon: Mail, external: false },
    ];

    return (
        <footer className="bg-surface border-t border-raised text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Información del desarrollador */}
                    <div className="flex items-center gap-2">
                        <Code className="w-5 h-5 text-accent-soft" />
                        <span className="text-sm">
                            {t.footer.developedBy}{" "}
                            <a
                                href={`mailto:${info.email}`}
                                className="text-accent-soft hover:text-accent-faint transition-colors font-medium"
                            >
                                {info.name}
                            </a>
                        </span>
                    </div>

                    {/* Enlaces sociales */}
                    <ul className="flex items-center gap-1">
                        {socials.map(({ label, href, icon: Icon, external }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    {...(external && {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                    })}
                                    className="flex items-center justify-center w-11 h-11 rounded-lg text-soft hover:text-accent-soft hover:bg-raised transition-colors"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tecnologías utilizadas */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-muted mb-2">
                        {t.footer.builtWith}
                    </p>
                    <p className="text-xs text-muted">
                        © {currentYear} {info.name}.{" "}
                        {t.footer.allRightsReserved}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
