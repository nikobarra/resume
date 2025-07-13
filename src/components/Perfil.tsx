import { Clock, Monitor } from "lucide-react";
import cvData from "../cvjson.json";

const Perfil = () => {
    const { perfil_profesional, disponibilidad } = cvData;

    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
                {/* Perfil Profesional */}
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="w-1 h-8 bg-orange-500"></div>
                        Perfil Profesional
                    </h2>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        {perfil_profesional}
                    </p>
                </div>

                {/* Disponibilidad */}
                <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Clock size={20} className="text-orange-500" />
                        Disponibilidad
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Monitor size={16} className="text-orange-400" />
                            <span className="text-neutral-300">
                                {disponibilidad.tipo}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Monitor size={16} className="text-orange-400" />
                            <span className="text-neutral-300">
                                {disponibilidad.modalidad}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
