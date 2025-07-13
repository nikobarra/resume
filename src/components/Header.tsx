import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import cvData from "../cvjson.json";

const Header = () => {
    const { informacion_personal } = cvData;

    return (
        <header className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Información principal */}
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                        <Image
                            src="/img/perfil.jpg"
                            alt={`Foto de perfil de ${informacion_personal.nombre_completo}`}
                            width={120}
                            height={120}
                            className="rounded-full border-4 border-orange-500 shadow-lg"
                        />
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                {informacion_personal.nombre_completo}
                            </h1>
                            <p className="text-xl text-orange-400 mb-4">
                                Futuro Ingeniero de Datos & Analista de Datos
                            </p>
                        </div>
                    </div>

                    {/* Información de contacto */}
                    <div className="flex flex-col gap-3 text-sm">
                        <a
                            href={`tel:${informacion_personal.telefono}`}
                            className="flex items-center gap-2 text-neutral-300 hover:text-orange-400 transition-colors"
                        >
                            <Phone size={16} />
                            {informacion_personal.telefono}
                        </a>
                        <a
                            href={`mailto:${informacion_personal.correo_electronico}`}
                            className="flex items-center gap-2 text-neutral-300 hover:text-orange-400 transition-colors"
                        >
                            <Mail size={16} />
                            {informacion_personal.correo_electronico}
                        </a>
                        <div className="flex items-center gap-2 text-neutral-300">
                            <MapPin size={16} />
                            {informacion_personal.ubicacion}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
