"use client";

import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getEducation } from "../utils/cvHelpers";

// Línea de tiempo sin tarjetas: se distingue del bloque de Experiencia y se lee como un índice
const Educacion = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const education = getEducation(cvData, language);

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-paper mb-8">
                {t.educacion.title}
            </h2>

            <ol className="border-t border-line">
                {education.map((item) => (
                    <li
                        key={item.title}
                        className="grid gap-x-8 gap-y-1 py-6 border-b border-line md:grid-cols-[14rem_1fr]"
                    >
                        <p className="text-sm text-muted md:pt-1">
                            {item.period}
                        </p>
                        <div>
                            <h3 className="text-xl font-semibold text-paper mb-1">
                                {item.title}
                            </h3>
                            <p className="text-accent-soft">
                                {item.institution}
                            </p>
                            <p className="text-sm text-soft mt-2">
                                {item.status}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Educacion;
