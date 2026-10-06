"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { Award, Clock, Eye, X, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import { useLanguage } from "../contexts/LanguageContext";
import { getCertifications } from "../utils/cvHelpers";
import { useDialogFocus } from "../hooks/useDialogFocus";

const FEATURED_COUNT = 6;

type Certification = ReturnType<typeof getCertifications>[number];

const formatHours = (hours: Certification["hours"], suffix: string) =>
    typeof hours === "number" ? `${hours} ${suffix}` : hours;

const Certificaciones = () => {
    const { t, cvData } = useTranslations();
    const { language } = useLanguage();

    const [expanded, setExpanded] = useState(false);
    const [selected, setSelected] = useState<Certification | null>(null);

    // Más recientes primero (el sort es estable: respeta el orden del JSON dentro de cada año)
    const certifications = [...getCertifications(cvData, language)].sort(
        (a, b) => b.year - a.year
    );
    const visible = expanded
        ? certifications
        : certifications.slice(0, FEATURED_COUNT);

    const dialogRef = useRef<HTMLDivElement>(null);
    const closeDialog = useCallback(() => setSelected(null), []);
    useDialogFocus(!!selected, dialogRef, closeDialog);

    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-paper mb-2">
                    {t.certificaciones.title}
                </h2>
                <p className="text-muted">
                    {certifications.length}{" "}
                    {t.certificaciones.certifications}
                </p>
            </div>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visible.map((cert) => (
                    <li
                        key={`${cert.name}-${cert.year}`}
                        className="bg-surface border border-raised rounded-lg p-5 flex flex-col"
                    >
                        <div className="flex items-start gap-3 mb-3">
                            <Award
                                size={20}
                                className="text-accent mt-0.5 shrink-0"
                            />
                            <h3 className="font-semibold text-paper leading-snug">
                                {cert.name}
                            </h3>
                        </div>
                        <p className="text-accent-soft text-sm mb-1">
                            {cert.awarded_by}
                        </p>
                        <p className="text-muted text-sm flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span>
                                {cert.month ? `${cert.month} ` : ""}
                                {cert.year}
                            </span>
                            {cert.hours && (
                                <span className="inline-flex items-center gap-1">
                                    <Clock size={14} />
                                    {formatHours(
                                        cert.hours,
                                        t.certificaciones.hoursShort
                                    )}
                                </span>
                            )}
                            {cert.grade && <span>{cert.grade}</span>}
                        </p>
                        {cert.part_of && (
                            <p className="text-muted text-xs mt-2">
                                {cert.part_of}
                            </p>
                        )}
                        {cert.image && (
                            <button
                                type="button"
                                onClick={() => setSelected(cert)}
                                className="mt-2 min-h-11 self-start inline-flex items-center gap-2 text-sm text-soft hover:text-accent-soft transition-colors"
                            >
                                <Eye size={16} />
                                {t.certificaciones.viewCertificate}
                            </button>
                        )}
                    </li>
                ))}
            </ul>

            {certifications.length > FEATURED_COUNT && (
                <div className="mt-8">
                    <button
                        type="button"
                        onClick={() => setExpanded(!expanded)}
                        aria-expanded={expanded}
                        className="inline-flex items-center gap-2 border border-line-strong hover:border-accent-soft hover:text-accent-soft text-paper px-5 py-2.5 rounded-lg transition-colors active:scale-[0.98]"
                    >
                        {expanded
                            ? t.certificaciones.showLess
                            : `${t.certificaciones.showAll} (${certifications.length})`}
                        {expanded ? (
                            <ChevronUp size={16} />
                        ) : (
                            <ChevronDown size={16} />
                        )}
                    </button>
                </div>
            )}

            {selected && selected.image && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={selected.name}
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-canvas/80"
                    onClick={closeDialog}
                >
                    <div
                        ref={dialogRef}
                        className="relative w-full max-w-4xl bg-surface border border-line rounded-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelected(null)}
                            aria-label={t.certificaciones.close}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-canvas/80 text-paper hover:text-accent-soft"
                        >
                            <X size={20} />
                        </button>
                        <Image
                            src={selected.image}
                            alt={`${t.certificaciones.viewCertificate}: ${selected.name}`}
                            width={1400}
                            height={1000}
                            className="w-full h-auto max-h-[85vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificaciones;
