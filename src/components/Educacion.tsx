"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getEducation } from "../utils/cvHelpers";

const Educacion = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const education = getEducation(cvData, language);

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {t.educacion.title}
            </h2>

            <div className="space-y-6">
                {education.map((item, index) => (
                    <div
                        key={index}
                        className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-orange-500 transition-colors"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    <GraduationCap
                                        size={20}
                                        className="text-orange-500"
                                    />
                                    {item.title}
                                </h3>
                                <p className="text-lg text-orange-400 mb-2">
                                    {item.institution}
                                </p>
                                <p className="text-neutral-400 flex items-center gap-2 mb-3">
                                    <Calendar size={16} />
                                    {item.period}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-neutral-300">
                                    <Award
                                        size={16}
                                        className="text-green-500"
                                    />
                                    <span>{item.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Educacion;
