"use client";

import { Github, Calendar, Star, Code, Eye } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getProjects } from "../utils/cvHelpers";

type Project = ReturnType<typeof getProjects>[number];

const Links = ({ project }: { project: Project }) => {
    const { t } = useTranslations();
    return (
        <div className="flex gap-2">
            {project.demo_url && (
                <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent-soft text-canvas px-3 min-h-11 rounded-lg text-sm font-semibold transition-colors active:scale-[0.98]"
                >
                    <Eye size={16} />
                    {t.proyectos.demo}
                </a>
            )}
            {project.repository_url && (
                <a
                    href={project.repository_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-line hover:bg-line-strong text-paper px-3 min-h-11 rounded-lg text-sm font-medium transition-colors active:scale-[0.98]"
                >
                    <Github size={16} />
                    {t.proyectos.repository}
                </a>
            )}
        </div>
    );
};

const Technologies = ({ project }: { project: Project }) => {
    const { t } = useTranslations();
    return (
        <div>
            <h4 className="text-xs font-medium text-muted uppercase tracking-wide mb-2">
                {t.proyectos.technologies}
            </h4>
            <ul className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                    <li
                        key={tech}
                        className="px-2 py-1 bg-raised text-soft rounded text-xs"
                    >
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Proyectos = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const projects = getProjects(cvData, language);
    const primary = projects.find((p) => p.primary);
    const others = projects.filter((p) => p !== primary);

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-paper mb-8">
                {t.proyectos.title}
            </h2>

            {projects.length === 0 ? (
                <div className="text-center text-muted py-8">
                    <Code size={48} className="mx-auto mb-4 text-line-strong" />
                    <p>{t.proyectos.noProjects}</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {primary && (
                        <article className="grid lg:grid-cols-5 bg-surface rounded-lg border border-accent/60 overflow-hidden">
                            <div className="relative min-h-56 lg:min-h-80 lg:col-span-3 bg-raised">
                                {primary.image && (
                                    <Image
                                        src={primary.image}
                                        alt={primary.name}
                                        fill
                                        sizes="(min-width: 1024px) 600px, 100vw"
                                        className="object-cover object-top"
                                    />
                                )}
                            </div>
                            <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-xs text-muted">
                                    <span className="inline-flex items-center gap-1 text-accent-soft font-semibold uppercase tracking-wide">
                                        <Star size={12} />
                                        {t.proyectos.featured}
                                    </span>
                                    <span className="inline-flex items-center gap-1">
                                        <Calendar size={12} />
                                        {primary.completion_date}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-paper">
                                    {primary.name}
                                </h3>
                                <p className="text-soft leading-relaxed">
                                    {primary.description}
                                </p>
                                <Technologies project={primary} />
                                <div className="mt-auto">
                                    <Links project={primary} />
                                </div>
                            </div>
                        </article>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {others.map((project) => (
                            <article
                                key={project.name}
                                className="bg-surface rounded-lg border border-raised hover:border-accent transition-colors overflow-hidden flex flex-col"
                            >
                                {project.image && (
                                    <div className="relative h-48 bg-raised">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            sizes="(min-width: 768px) 50vw, 100vw"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                )}
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="text-xl font-semibold text-paper">
                                            {project.name}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-xs text-muted shrink-0 mt-1">
                                            <Calendar size={12} />
                                            {project.completion_date}
                                        </span>
                                    </div>
                                    <p className="text-soft text-sm">
                                        {project.description}
                                    </p>
                                    <Technologies project={project} />
                                    <div className="mt-auto">
                                        <Links project={project} />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Proyectos;
