// Tipos para el CV en español
export interface CVDataEs {
    informacion_personal: {
        nombre_completo: string;
        titulo_profesional: string;
        telefono: string;
        correo_electronico: string;
        sitio_web: string;
        github: string;
        linkedin: string;
        ubicacion: string;
    };
    perfil_profesional: string;
    educacion: {
        titulo: string;
        institucion: string;
        periodo: string;
        estado: string;
    }[];
    certificaciones_relevantes: {
        nombre: string;
        otorgado_por: string;
        anio: number;
        mes?: string;
        horas?: number | string;
        calificacion?: string;
        parte_de?: string;
        imagen?: string;
    }[];
    total_certificaciones: number;
    experiencia_educacion_desarrollo: {
        puesto: string;
        empresa: string;
        periodo: string;
        contacto?: string;
        tareas: string[];
    }[];
    conocimientos_tecnicos: {
        frontend: string[];
        backend: string[];
        bases_de_datos: string[];
        datos_y_bi: string[];
        ia_y_herramientas: string[];
        devops_y_deploy: string[];
        metodologias: string[];
        otros: string[];
    };
    habilidades_blandas: string[];
    proyectos: {
        nombre: string;
        descripcion: string;
        tecnologias: string[];
        imagen?: string;
        url_demo: string | null;
        url_repositorio: string | null;
        fecha_finalizacion: string;
        estado: string;
        destacado: boolean;
        principal?: boolean;
    }[];
    idiomas: {
        idioma: string;
        nivel: string;
        certificacion?: string;
        nota?: string;
    }[];
    disponibilidad: {
        tipo: string;
        modalidad: string;
    };
}

// Tipos para el CV en inglés
export interface CVDataEn {
    personal_information: {
        full_name: string;
        professional_title: string;
        phone: string;
        email: string;
        website: string;
        github: string;
        linkedin: string;
        location: string;
    };
    professional_summary: string;
    education: {
        title: string;
        institution: string;
        period: string;
        status: string;
    }[];
    relevant_certifications: {
        name: string;
        awarded_by: string;
        year: number;
        month?: string;
        hours?: number | string;
        grade?: string;
        part_of?: string;
        image?: string;
    }[];
    total_certifications: number;
    experience_education_development: {
        position: string;
        company: string;
        period: string;
        contact?: string;
        tasks: string[];
    }[];
    technical_skills: {
        frontend: string[];
        backend: string[];
        databases: string[];
        data_and_bi: string[];
        ai_and_tools: string[];
        devops_and_deploy: string[];
        methodologies: string[];
        other: string[];
    };
    soft_skills: string[];
    projects: {
        name: string;
        description: string;
        technologies: string[];
        image?: string;
        demo_url: string | null;
        repository_url: string | null;
        completion_date: string;
        status: string;
        featured: boolean;
        primary?: boolean;
    }[];
    languages: {
        language: string;
        level: string;
        certification?: string;
        note?: string;
    }[];
    availability: {
        type: string;
        modality: string;
    };
}

// Tipo unión para ambos formatos
export type CVData = CVDataEs | CVDataEn;
