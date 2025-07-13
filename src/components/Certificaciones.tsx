"use client";

import {
    Award,
    Calendar,
    Clock,
    Building,
    Filter,
    Star,
    Eye,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getCertifications } from "../utils/cvHelpers";

const Certificaciones = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const certifications = getCertifications(cvData, language);
    const [filterYear, setFilterYear] = useState<string>("todos");
    const [hoveredCert, setHoveredCert] = useState<string | null>(null);

    // Obtener años únicos para el filtro
    const years = [...new Set(certifications.map((cert) => cert.year))].sort(
        (a, b) => b - a
    );

    // Filtrar certificaciones
    const filteredCertifications =
        filterYear === "todos"
            ? certifications
            : certifications.filter(
                  (cert) => cert.year === parseInt(filterYear)
              );

    // Agrupar por año
    const groupedByYear = filteredCertifications.reduce((acc, cert) => {
        const year = cert.year;
        if (!acc[year]) acc[year] = [];
        acc[year].push(cert);
        return acc;
    }, {} as Record<number, typeof certifications>);

    const getYearColor = (year: number) => {
        const currentYear = new Date().getFullYear();
        if (year === currentYear) return "text-green-400";
        if (year === currentYear - 1) return "text-yellow-400";
        return "text-neutral-400";
    };

    const getInstitutionColor = (institution: string) => {
        if (institution.includes("UBA")) return "bg-blue-600";
        if (institution.includes("Coderhouse")) return "bg-green-600";
        if (institution.includes("Cisco")) return "bg-purple-600";
        if (institution.includes("UTN")) return "bg-red-600";
        if (institution.includes("EducaciónIT")) return "bg-orange-600";
        return "bg-gray-600";
    };

    // Función para obtener la imagen del certificado
    const getCertificateImage = (certName: string) => {
        const imageMap: Record<string, string> = {
            // Certificados en español
            "Scrum Foundation": "/img/certificates/Scrum Foundation.jpg",
            "Python Essentials 1": "/img/certificates/python essentials 1.jpg",
            "Python 3 - Nivel Inicial":
                "/img/certificates/Python 3 - nivel inicial.jpg",
            "Desarrollo Web Full-Stack con Python y Django":
                "/img/certificates/desarrollo web.png",
            "Desarrollo Web": "/img/certificates/desarrollo web.png",
            Javascript: "/img/certificates/javascript.png",
            JavaScript: "/img/certificates/javascript.png",
            Python: "/img/certificates/python.png",
            "Módulo Diseño y Despliegue de IA":
                "/img/certificates/Modulo diseño y despligue de IA.jpg",
            "Módulo Gobernanza de Datos":
                "/img/certificates/Modulo gobernanza de datos.jpg",
            "Gobernanza de la Inteligencia Artificial":
                "/img/certificates/Gobernanza de la inteligencia artificial.jpg",
            "ABC de Programación":
                "/img/certificates/abc de la programacion.jpg",
            "Programa Básico Multidisciplinario de Formación en Datos e Inteligencia Artificial":
                "/img/certificates/programa basico en datos e IA.jpg",
            "Programing Essentials in Python":
                "/img/certificates/Programing essentials in python.jpg",
            "Curso de Fundamentos de Python":
                "/img/certificates/curso de fundamentos de python.jpg",
            "Introducción a Bases de Datos y SQL":
                "/img/certificates/introduccion a bases de datos y sql.jpeg",
            "Python para Análisis de Datos":
                "/img/certificates/python para el analisis de datos.jpeg",
            "Introducción a la inteligencia artificial y Prompt Engineering":
                "/img/certificates/introduccion a la IA y prompt engineering.jpeg",
            "Introducción al Análisis de datos con Python":
                "/img/certificates/introduccion al analisis de datos con python.jpg",
            "Curso de base de datos con Python":
                "/img/certificates/curso de base de datos con python.jpg",
            "Herramientas para Formadores":
                "/img/certificates/herramientas para formadores.jpg",
            "Argentina Programa 4.0 - 1° Etapa #SeProgramar":
                "/img/certificates/argentina programa_se programar.jpg",

            // Certificados en inglés
            "Python 3 - Beginner Level":
                "/img/certificates/Python 3 - nivel inicial.jpg",
            "Web Development": "/img/certificates/desarrollo web.png",
            "AI Design and Deployment Module":
                "/img/certificates/Modulo diseño y despligue de IA.jpg",
            "Data Governance Module":
                "/img/certificates/Modulo gobernanza de datos.jpg",
            "Artificial Intelligence Governance":
                "/img/certificates/Gobernanza de la inteligencia artificial.jpg",
            "Programming ABCs": "/img/certificates/abc de la programacion.jpg",
            "Basic Multidisciplinary Program in Data and Artificial Intelligence Training":
                "/img/certificates/programa basico en datos e IA.jpg",
            "Python Fundamentals Course":
                "/img/certificates/curso de fundamentos de python.jpg",
            "Introduction to Databases and SQL":
                "/img/certificates/introduccion a bases de datos y sql.jpeg",
            "Python for Data Analysis":
                "/img/certificates/python para el analisis de datos.jpeg",
            "Introduction to Artificial Intelligence and Prompt Engineering":
                "/img/certificates/introduccion a la IA y prompt engineering.jpeg",
            "Introduction to Data Analysis with Python":
                "/img/certificates/introduccion al analisis de datos con python.jpg",
            "Database Course with Python":
                "/img/certificates/curso de base de datos con python.jpg",
            "Programming Essentials in Python":
                "/img/certificates/Programing essentials in python.jpg",
            "Tools for Trainers":
                "/img/certificates/herramientas para formadores.jpg",
            "Argentina Programa 4.0 - 1st Stage #SeProgramar":
                "/img/certificates/argentina programa_se programar.jpg",
        };

        return imageMap[certName] || null;
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                    {t.certificaciones.title}
                </h2>
                <p className="text-neutral-400 mb-6">
                    {certifications.length}{" "}
                    {t.certificaciones.totalCertificates.toLowerCase()}
                </p>

                {/* Filtro por año */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <button
                        onClick={() => setFilterYear("todos")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            filterYear === "todos"
                                ? "bg-orange-500 text-white"
                                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                        }`}
                    >
                        <Filter size={16} className="inline mr-2" />
                        {t.certificaciones.allYears}
                    </button>
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setFilterYear(year.toString())}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                filterYear === year.toString()
                                    ? "bg-orange-500 text-white"
                                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            {/* Certificaciones agrupadas por año */}
            <div className="space-y-8">
                {Object.entries(groupedByYear)
                    .sort(([a], [b]) => parseInt(b) - parseInt(a))
                    .map(([year, certifications]) => (
                        <div key={year} className="space-y-4">
                            <h3
                                className={`text-2xl font-bold ${getYearColor(
                                    parseInt(year)
                                )} flex items-center gap-2`}
                            >
                                <Calendar size={24} />
                                {year}
                                <span className="text-sm text-neutral-500">
                                    ({certifications.length}{" "}
                                    {t.certificaciones.certifications})
                                </span>
                            </h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {certifications.map((certificacion, index) => {
                                    const imagePath = getCertificateImage(
                                        certificacion.name
                                    );
                                    const hasImage = imagePath !== null;

                                    return (
                                        <div
                                            key={index}
                                            className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group relative"
                                            onMouseEnter={() =>
                                                hasImage &&
                                                setHoveredCert(
                                                    certificacion.name
                                                )
                                            }
                                            onMouseLeave={() =>
                                                setHoveredCert(null)
                                            }
                                        >
                                            <div className="space-y-4">
                                                {/* Header con badge de institución */}
                                                <div className="flex items-start justify-between">
                                                    <h4 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                                                        {certificacion.name}
                                                    </h4>
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getInstitutionColor(
                                                            certificacion.awarded_by
                                                        )}`}
                                                    >
                                                        {
                                                            certificacion.awarded_by.split(
                                                                ","
                                                            )[0]
                                                        }
                                                    </span>
                                                </div>

                                                {/* Institución */}
                                                <p className="text-orange-400 flex items-center gap-2 text-sm">
                                                    <Building size={14} />
                                                    {certificacion.awarded_by}
                                                </p>

                                                {/* Horas */}
                                                {certificacion.hours && (
                                                    <p className="text-neutral-300 flex items-center gap-2 text-sm">
                                                        <Clock size={14} />
                                                        {typeof certificacion.hours ===
                                                        "number"
                                                            ? `${certificacion.hours} horas`
                                                            : certificacion.hours}
                                                    </p>
                                                )}

                                                {/* Programa */}
                                                {certificacion.part_of && (
                                                    <div className="bg-neutral-800 px-3 py-2 rounded border-l-4 border-orange-500">
                                                        <p className="text-xs text-neutral-400">
                                                            <Star
                                                                size={12}
                                                                className="inline mr-1"
                                                            />
                                                            {
                                                                certificacion.part_of
                                                            }
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Badge de año */}
                                                <div className="flex justify-between items-center pt-2 border-t border-neutral-800">
                                                    <span className="text-xs text-neutral-500">
                                                        {
                                                            t.certificaciones
                                                                .obtainedIn
                                                        }{" "}
                                                        {certificacion.year}
                                                    </span>
                                                    <Award
                                                        size={16}
                                                        className="text-orange-500"
                                                    />
                                                </div>

                                                {/* Indicador de imagen */}
                                                {hasImage && (
                                                    <div className="absolute top-2 right-2">
                                                        <Eye
                                                            size={16}
                                                            className="text-orange-400 opacity-60"
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Modal de imagen al hover con efecto de despegue */}
                                            <AnimatePresence>
                                                {hoveredCert ===
                                                    certificacion.name &&
                                                    hasImage && (
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0.8,
                                                                y: 20,
                                                                rotateX: -15,
                                                                z: 0,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1,
                                                                y: -20,
                                                                rotateX: 0,
                                                                z: 50,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                scale: 0.8,
                                                                y: 20,
                                                                rotateX: -15,
                                                                z: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.4,
                                                                ease: "easeOut",
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 25,
                                                            }}
                                                            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                                                        >
                                                            <motion.div
                                                                className="bg-neutral-800 p-4 rounded-xl shadow-2xl border border-neutral-700 max-w-sm mx-4 pointer-events-auto"
                                                                style={{
                                                                    boxShadow:
                                                                        "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 165, 0, 0.1)",
                                                                }}
                                                            >
                                                                <div className="relative">
                                                                    <motion.img
                                                                        src={
                                                                            imagePath
                                                                        }
                                                                        alt={`Certificado: ${certificacion.name}`}
                                                                        className="w-full h-auto rounded-lg object-cover"
                                                                        onError={(
                                                                            e
                                                                        ) => {
                                                                            console.error(
                                                                                `Error loading image: ${imagePath}`
                                                                            );
                                                                            e.currentTarget.style.display =
                                                                                "none";
                                                                        }}
                                                                        initial={{
                                                                            filter: "blur(4px)",
                                                                        }}
                                                                        animate={{
                                                                            filter: "blur(0px)",
                                                                        }}
                                                                        transition={{
                                                                            duration: 0.3,
                                                                            delay: 0.1,
                                                                        }}
                                                                    />
                                                                    <motion.div
                                                                        className="mt-3 text-center"
                                                                        initial={{
                                                                            opacity: 0,
                                                                            y: 10,
                                                                        }}
                                                                        animate={{
                                                                            opacity: 1,
                                                                            y: 0,
                                                                        }}
                                                                        transition={{
                                                                            duration: 0.3,
                                                                            delay: 0.2,
                                                                        }}
                                                                    >
                                                                        <p className="text-white text-sm font-medium leading-tight">
                                                                            {
                                                                                certificacion.name
                                                                            }
                                                                        </p>
                                                                    </motion.div>
                                                                </div>
                                                            </motion.div>
                                                        </motion.div>
                                                    )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
            </div>

            {/* Estadísticas */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-neutral-900 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">
                        {certifications.length}
                    </div>
                    <div className="text-sm text-neutral-400">
                        {t.certificaciones.totalCertificates}
                    </div>
                </div>
                <div className="bg-neutral-900 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">
                        {years.length}
                    </div>
                    <div className="text-sm text-neutral-400">
                        {t.certificaciones.years}
                    </div>
                </div>
                <div className="bg-neutral-900 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">
                        {certifications.filter((cert) => cert.hours).length}
                    </div>
                    <div className="text-sm text-neutral-400">
                        {t.certificaciones.withHours}
                    </div>
                </div>
                <div className="bg-neutral-900 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500">
                        {certifications.filter((cert) => cert.part_of).length}
                    </div>
                    <div className="text-sm text-neutral-400">
                        {t.certificaciones.programs}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificaciones;
