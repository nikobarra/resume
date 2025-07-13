"use client";

import { Briefcase, Calendar, Building, CheckCircle } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getExperience } from "../utils/cvHelpers";

const Experiencia = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const experience = getExperience(cvData, language);

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {t.experiencia.title}
            </h2>

            <div className="space-y-8">
                {experience.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-orange-500 transition-colors"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                    <Briefcase
                                        size={20}
                                        className="text-orange-500"
                                    />
                                    {exp.position}
                                </h3>
                                <p className="text-lg text-orange-400 mb-1 flex items-center gap-2">
                                    <Building size={16} />
                                    {exp.company}
                                </p>
                                <p className="text-neutral-400 flex items-center gap-2">
                                    <Calendar size={16} />
                                    {exp.period}
                                </p>
                                {exp.contact && (
                                    <p className="text-sm text-neutral-500 mt-1">
                                        {t.experiencia.contact}: {exp.contact}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-neutral-300 uppercase tracking-wide">
                                {t.experiencia.responsibilities}:
                            </h4>
                            <ul className="space-y-2">
                                {exp.tasks.map((task, taskIndex) => (
                                    <li
                                        key={taskIndex}
                                        className="flex items-start gap-2 text-neutral-300"
                                    >
                                        <CheckCircle
                                            size={16}
                                            className="text-orange-500 mt-0.5 flex-shrink-0"
                                        />
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiencia;
