export interface InformacionPersonal {
    nombre_completo: string;
    telefono: string;
    correo_electronico: string;
    ubicacion: string;
}

export interface Educacion {
    titulo: string;
    institucion: string;
    periodo: string;
    estado: string;
}

export interface Certificacion {
    nombre: string;
    otorgado_por: string;
    anio: number;
    horas?: number | string;
    parte_de?: string;
}

export interface Experiencia {
    puesto: string;
    empresa: string;
    contacto?: string;
    periodo: string;
    tareas: string[];
}

export interface ConocimientosTecnicos {
    lenguajes: string[];
    frameworks_y_herramientas: string[];
    metodologias: string[];
    otros: string[];
}

export interface Disponibilidad {
    tipo: string;
    modalidad: string;
}

export interface CVData {
    informacion_personal: InformacionPersonal;
    perfil_profesional: string;
    educacion: Educacion[];
    certificaciones_relevantes: Certificacion[];
    experiencia_educacion_desarrollo: Experiencia[];
    conocimientos_tecnicos: ConocimientosTecnicos;
    habilidades_blandas: string[];
    disponibilidad: Disponibilidad;
}
