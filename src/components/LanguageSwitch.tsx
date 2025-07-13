"use client";

import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitch = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = () => {
        setLanguage(language === "es" ? "en" : "es");
    };

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={handleLanguageChange}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="switch"
                aria-checked={language === "en"}
                aria-label="Toggle language between Spanish and English"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleLanguageChange();
                    }
                }}
            >
                <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out ${
                        language === "en" ? "translate-x-8" : "translate-x-1"
                    }`}
                />
                <span className="absolute left-2 text-xs font-medium text-gray-600">
                    ES
                </span>
                <span className="absolute right-2 text-xs font-medium text-gray-600">
                    EN
                </span>
            </button>
            <span className="text-sm font-medium text-gray-700">
                {language === "es" ? "Español" : "English"}
            </span>
        </div>
    );
};

export default LanguageSwitch;
