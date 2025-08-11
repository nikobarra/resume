// Tipos para el CV en español
export interface CVDataEs {
    informacion_personal: {
        nombre_completo: string;
        telefono: string;
        correo_electronico: string;
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
        horas?: number | string;
        parte_de?: string;
    }[];
    experiencia_educacion_desarrollo: {
        puesto: string;
        empresa: string;
        periodo: string;
        contacto?: string;
        tareas: string[];
    }[];
    conocimientos_tecnicos: {
        lenguajes: string[];
        frameworks_y_herramientas: string[];
        metodologias: string[];
        otros: string[];
    };
    habilidades_blandas: string[];
    proyectos: {
        nombre: string;
        descripcion: string;
        tecnologias: string[];
        imagen: string;
        url_demo: string;
        url_repositorio: string;
        fecha_finalizacion: string;
        estado: string;
        destacado: boolean;
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
        phone: string;
        email: string;
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
        hours?: number | string;
        part_of?: string;
    }[];
    experience_education_development: {
        position: string;
        company: string;
        period: string;
        contact?: string;
        tasks: string[];
    }[];
    technical_skills: {
        languages: string[];
        frameworks_and_tools: string[];
        methodologies: string[];
        other: string[];
    };
    soft_skills: string[];
    projects: {
        name: string;
        description: string;
        technologies: string[];
        image: string;
        demo_url: string;
        repository_url: string;
        completion_date: string;
        status: string;
        featured: boolean;
    }[];
    availability: {
        type: string;
        modality: string;
    };
}

// Tipo unión para ambos formatos
export type CVData = CVDataEs | CVDataEn;
