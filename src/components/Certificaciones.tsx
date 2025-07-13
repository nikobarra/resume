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
import cvData from "../cvjson.json";

const Certificaciones = () => {
    const { certificaciones_relevantes } = cvData;
    const [filterYear, setFilterYear] = useState<string>("todos");
    const [hoveredCert, setHoveredCert] = useState<string | null>(null);

    // Obtener años únicos para el filtro
    const years = [
        ...new Set(certificaciones_relevantes.map((cert) => cert.anio)),
    ].sort((a, b) => b - a);

    // Filtrar certificaciones
    const filteredCertifications =
        filterYear === "todos"
            ? certificaciones_relevantes
            : certificaciones_relevantes.filter(
                  (cert) => cert.anio === parseInt(filterYear)
              );

    // Agrupar por año
    const groupedByYear = filteredCertifications.reduce((acc, cert) => {
        const year = cert.anio;
        if (!acc[year]) acc[year] = [];
        acc[year].push(cert);
        return acc;
    }, {} as Record<number, typeof certificaciones_relevantes>);

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
                "/img/certificates/argentina programa_ # se programar .jpg",
        };

        return imageMap[certName] || null;
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Certificaciones Relevantes
                </h2>
                <p className="text-neutral-400 mb-6">
                    {certificaciones_relevantes.length} certificaciones
                    obtenidas
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
                        Todas
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
                                    ({certifications.length} certificaciones)
                                </span>
                            </h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {certifications.map((certificacion, index) => {
                                    const imagePath = getCertificateImage(
                                        certificacion.nombre
                                    );
                                    const hasImage = imagePath !== null;

                                    return (
                                        <div
                                            key={index}
                                            className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group relative"
                                            onMouseEnter={() =>
                                                hasImage &&
                                                setHoveredCert(
                                                    certificacion.nombre
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
                                                        {certificacion.nombre}
                                                    </h4>
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getInstitutionColor(
                                                            certificacion.otorgado_por
                                                        )}`}
                                                    >
                                                        {
                                                            certificacion.otorgado_por.split(
                                                                ","
                                                            )[0]
                                                        }
                                                    </span>
                                                </div>

                                                {/* Institución */}
                                                <p className="text-orange-400 flex items-center gap-2 text-sm">
                                                    <Building size={14} />
                                                    {certificacion.otorgado_por}
                                                </p>

                                                {/* Horas */}
                                                {certificacion.horas && (
                                                    <p className="text-neutral-300 flex items-center gap-2 text-sm">
                                                        <Clock size={14} />
                                                        {typeof certificacion.horas ===
                                                        "number"
                                                            ? `${certificacion.horas} horas`
                                                            : certificacion.horas}
                                                    </p>
                                                )}

                                                {/* Programa */}
                                                {certificacion.parte_de && (
                                                    <div className="bg-neutral-800 px-3 py-2 rounded border-l-4 border-orange-500">
                                                        <p className="text-xs text-neutral-400">
                                                            <Star
                                                                size={12}
                                                                className="inline mr-1"
                                                            />
                                                            {
                                                                certificacion.parte_de
                                                            }
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Badge de año */}
                                                <div className="flex justify-between items-center pt-2 border-t border-neutral-800">
                                                    <span className="text-xs text-neutral-500">
                                                        Obtenida en{" "}
                                                        {certificacion.anio}
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

                                            {/* Modal de imagen al hover */}
                                            {hoveredCert ===
                                                certificacion.nombre &&
                                                hasImage && (
                                                    <div className="absolute top-0 left-0 z-50 bg-neutral-800 p-3 rounded-lg shadow-2xl border border-neutral-700 max-w-xs">
                                                        <div className="relative">
                                                            <img
                                                                src={imagePath}
                                                                alt={`Certificado: ${certificacion.nombre}`}
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
                                                            />
                                                            <div className="mt-2 text-center">
                                                                <p className="text-white text-xs font-medium leading-tight">
                                                                    {
                                                                        certificacion.nombre
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
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
                        {certificaciones_relevantes.length}
                    </div>
                    <div className="text-sm text-neutral-400">Total</div>
                </div>
                <div className="bg-neutral-900 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">
                        {years.length}
                    </div>
                    <div className="text-sm text-neutral-400">Años</div>
                </div>
                <div className="bg-neutral-900 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">
                        {
                            certificaciones_relevantes.filter(
                                (cert) => cert.horas
                            ).length
                        }
                    </div>
                    <div className="text-sm text-neutral-400">Con horas</div>
                </div>
                <div className="bg-neutral-900 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500">
                        {
                            certificaciones_relevantes.filter(
                                (cert) => cert.parte_de
                            ).length
                        }
                    </div>
                    <div className="text-sm text-neutral-400">Programas</div>
                </div>
            </div>
        </div>
    );
};

export default Certificaciones;
