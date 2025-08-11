import { CVDataEs, CVDataEn } from "../types/cv";

export const getPersonalInfo = (
    cvData: CVDataEs | CVDataEn,
    language: "es" | "en"
) => {
    if (language === "es") {
        const data = cvData as CVDataEs;
        return {
            name: data.informacion_personal.nombre_completo,
            phone: data.informacion_personal.telefono,
            email: data.informacion_personal.correo_electronico,
            location: data.informacion_personal.ubicacion,
        };
    } else {
        const data = cvData as CVDataEn;
        return {
            name: data.personal_information.full_name,
            phone: data.personal_information.phone,
            email: data.personal_information.email,
            location: data.personal_information.location,
        };
    }
};

export const getProfessionalSummary = (
    cvData: CVDataEs | CVDataEn,
    language: "es" | "en"
) => {
    if (language === "es") {
        return (cvData as CVDataEs).perfil_profesional;
    } else {
        return (cvData as CVDataEn).professional_summary;
    }
};

export const getEducation = (
    cvData: CVDataEs | CVDataEn,
    language: "es" | "en"
) => {
    if (language === "es") {
        const data = (cvData as CVDataEs).educacion;
        return data.map((edu) => ({
            title: edu.titulo,
            institution: edu.institucion,
            period: edu.periodo,
            status: edu.estado,
        }));
    } else {
        const data = (cvData as CVDataEn).education;
        return data.map((edu) => ({
            title: edu.title,
            institution: edu.institution,
            period: edu.period,
            status: edu.status,
        }));
    }
};

export const getCertifications = (
    cvData: CVDataEs | CVDataEn,
    language: "es" | "en"
) => {
    if (language === "es") {
        const data = (cvData as CVDataEs).certificaciones_relevantes;
        return data.map((cert) => ({
            name: cert.nombre,
            awarded_by: cert.otorgado_por,
            year: cert.anio,
            hours: cert.horas,
            part_of: cert.parte_de,
        }));
    } else {
        const data = (cvData as CVDataEn).relevant_certifications;
        return data.map((cert) => ({
            name: cert.name,
            awarded_by: cert.awarded_by,
            year: cert.year,
            hours: cert.hours,
            part_of: cert.part_of,
        }));
    }
};

export const getExperience = (
    cvData: CVDataEs | CVDataEn,
    language: "es" | "en"
) => {
    if (language === "es") {
        const data = (cvData as CVDataEs).experiencia_educacion_desarrollo;
        return data.map((exp) => ({
            position: exp.puesto,
            company: exp.empresa,
            period: exp.periodo,
            contact: exp.contacto,
            tasks: exp.tareas,
        }));
    } else {
        const data = (cvData as CVDataEn).experience_education_development;
        return data.map((exp) => ({
            position: exp.position,
            company: exp.company,
            period: exp.period,
            contact: exp.contact,
            tasks: exp.tasks,
        }));
    }
};

export const getTechnicalSkills = (
    cvData: CVDataEs | CVDataEn,
    language: "es" | "en"
) => {
    if (language === "es") {
        const data = (cvData as CVDataEs).conocimientos_tecnicos;
        return {
            languages: data.lenguajes,
            frameworks_and_tools: data.frameworks_y_herramientas,
            methodologies: data.metodologias,
            other: data.otros,
        };
    } else {
        const data = (cvData as CVDataEn).technical_skills;
        return {
            languages: data.languages,
            frameworks_and_tools: data.frameworks_and_tools,
            methodologies: data.methodologies,
            other: data.other,
        };
    }
};

export const getSoftSkills = (
    cvData: CVDataEs | CVDataEn,
    language: "es" | "en"
) => {
    if (language === "es") {
        return (cvData as CVDataEs).habilidades_blandas;
    } else {
        return (cvData as CVDataEn).soft_skills;
    }
};

export const getProjects = (
    cvData: CVDataEs | CVDataEn,
    language: "es" | "en"
) => {
    if (language === "es") {
        const data = (cvData as CVDataEs).proyectos;
        return data.map((project) => ({
            name: project.nombre,
            description: project.descripcion,
            technologies: project.tecnologias,
            image: project.imagen,
            demo_url: project.url_demo,
            repository_url: project.url_repositorio,
            completion_date: project.fecha_finalizacion,
            status: project.estado,
            featured: project.destacado,
        }));
    } else {
        const data = (cvData as CVDataEn).projects;
        return data.map((project) => ({
            name: project.name,
            description: project.description,
            technologies: project.technologies,
            image: project.image,
            demo_url: project.demo_url,
            repository_url: project.repository_url,
            completion_date: project.completion_date,
            status: project.status,
            featured: project.featured,
        }));
    }
};

export const getAvailability = (
    cvData: CVDataEs | CVDataEn,
    language: "es" | "en"
) => {
    if (language === "es") {
        const data = (cvData as CVDataEs).disponibilidad;
        return {
            type: data.tipo,
            modality: data.modalidad,
        };
    } else {
        const data = (cvData as CVDataEn).availability;
        return {
            type: data.type,
            modality: data.modality,
        };
    }
};
