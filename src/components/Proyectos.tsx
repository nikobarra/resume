"use client";

import { Github, Calendar, Star, Code, Eye } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getProjects } from "../utils/cvHelpers";
import Image from "next/image";

const Proyectos = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const projects = getProjects(cvData, language);

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {t.proyectos.title}
            </h2>

            {projects.length === 0 ? (
                <div className="text-center text-neutral-400 py-8">
                    <Code size={48} className="mx-auto mb-4 text-neutral-600" />
                    <p>{t.proyectos.noProjects}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900 rounded-lg border border-neutral-800 hover:border-orange-500 transition-all duration-300 overflow-hidden group"
                        >
                            {/* Imagen del proyecto */}
                            <div className="relative h-48 bg-neutral-800 overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <Code
                                            size={48}
                                            className="text-neutral-600"
                                        />
                                    </div>
                                )}

                                {/* Badge de proyecto destacado */}
                                {project.featured && (
                                    <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                        <Star size={12} />
                                        {t.proyectos.featured}
                                    </div>
                                )}
                            </div>

                            {/* Contenido del proyecto */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-semibold text-white">
                                        {project.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                                        <Calendar size={12} />
                                        {project.completion_date}
                                    </div>
                                </div>

                                <p className="text-neutral-300 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Estado del proyecto */}
                                <div className="mb-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">
                                        {project.status}
                                    </span>
                                </div>

                                {/* Tecnologías */}
                                <div className="mb-4">
                                    <h4 className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-2">
                                        {t.proyectos.technologies}:
                                    </h4>
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Enlaces del proyecto */}
                                <div className="flex gap-2">
                                    {project.demo_url && (
                                        <a
                                            href={project.demo_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
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
                                            className="flex-1 flex items-center justify-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                                        >
                                            <Github size={16} />
                                            {t.proyectos.repository}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Proyectos;
