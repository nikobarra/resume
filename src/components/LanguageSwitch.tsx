"use client";

import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitch = () => {
    const { language, setLanguage } = useLanguage();

    const options = [
        { code: "es", label: "ES", name: "Español" },
        { code: "en", label: "EN", name: "English" },
    ] as const;

    return (
        <div
            role="group"
            aria-label="Idioma / Language"
            className="inline-flex rounded-full border border-line bg-raised p-0.5"
        >
            {options.map(({ code, label, name }) => (
                <button
                    key={code}
                    type="button"
                    onClick={() => setLanguage(code)}
                    aria-pressed={language === code}
                    aria-label={name}
                    className={`min-w-11 min-h-11 px-3 text-xs font-semibold rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft ${
                        language === code
                            ? "bg-accent text-black"
                            : "text-soft hover:text-white"
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitch;
