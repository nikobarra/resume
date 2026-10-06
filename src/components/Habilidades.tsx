"use client";

import { Users, Languages } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import {
    getTechnicalSkills,
    getSoftSkills,
    getLanguages,
} from "../utils/cvHelpers";

const Chips = ({ items }: { items: string[] }) => (
    <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
            <li
                key={item}
                className="px-3 py-1 rounded-full text-sm bg-raised border border-line text-ink"
            >
                {item}
            </li>
        ))}
    </ul>
);

const Habilidades = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const skills = getTechnicalSkills(cvData, language);
    const softSkills = getSoftSkills(cvData, language);
    const languages = getLanguages(cvData, language);
    const c = t.habilidades.categories;

    const groups: [string, string[]][] = [
        [c.frontend, skills.frontend],
        [c.backend, skills.backend],
        [c.databases, skills.databases],
        [c.data, skills.data_and_bi],
        [c.ai, skills.ai_and_tools],
        [c.devops, skills.devops_and_deploy],
        [c.methodologies, skills.methodologies],
    ];

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-paper mb-10">
                {t.habilidades.title}
            </h2>

            <div className="grid lg:grid-cols-3 gap-10">
                <dl className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {groups.map(([label, items]) => (
                        <div key={label}>
                            <dt className="text-sm font-semibold uppercase tracking-wide text-accent-soft mb-3">
                                {label}
                            </dt>
                            <dd>
                                <Chips items={items} />
                            </dd>
                        </div>
                    ))}
                </dl>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-soft mb-3 flex items-center gap-2">
                            <Users size={16} />
                            {t.habilidades.softSkills}
                        </h3>
                        <Chips items={softSkills} />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-soft mb-3 flex items-center gap-2">
                            <Languages size={16} />
                            {t.habilidades.languagesSpoken}
                        </h3>
                        <ul className="space-y-2 text-soft text-sm">
                            {languages.map((l) => (
                                <li key={l.language}>
                                    <span className="text-paper font-medium">
                                        {l.language}
                                    </span>{" "}
                                    · {l.level}
                                    {l.certification && (
                                        <span className="block text-muted">
                                            {l.certification}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Habilidades;
