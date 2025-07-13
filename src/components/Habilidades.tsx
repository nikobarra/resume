"use client";

import { Code, Users, Brain, Wrench } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getTechnicalSkills, getSoftSkills } from "../utils/cvHelpers";

const Habilidades = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const technicalSkills = getTechnicalSkills(cvData, language);
    const softSkills = getSoftSkills(cvData, language);

    const renderSkillTags = (skills: string[], color: string) => (
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}
                >
                    {skill}
                </span>
            ))}
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {t.habilidades.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Conocimientos Técnicos */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Code size={20} className="text-orange-500" />
                            {t.habilidades.languages}
                        </h3>
                        {renderSkillTags(
                            technicalSkills.languages,
                            "bg-blue-600 text-white"
                        )}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Wrench size={20} className="text-orange-500" />
                            {t.habilidades.tools}
                        </h3>
                        {renderSkillTags(
                            technicalSkills.frameworks_and_tools,
                            "bg-green-600 text-white"
                        )}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Brain size={20} className="text-orange-500" />
                            {t.habilidades.methodologies}
                        </h3>
                        {renderSkillTags(
                            technicalSkills.methodologies,
                            "bg-purple-600 text-white"
                        )}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Wrench size={20} className="text-orange-500" />
                            {t.habilidades.otherKnowledge}
                        </h3>
                        {renderSkillTags(
                            technicalSkills.other,
                            "bg-gray-600 text-white"
                        )}
                    </div>
                </div>

                {/* Habilidades Blandas */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Users size={20} className="text-orange-500" />
                        {t.habilidades.softSkills}
                    </h3>
                    {renderSkillTags(softSkills, "bg-orange-600 text-white")}
                </div>
            </div>
        </div>
    );
};

export default Habilidades;
