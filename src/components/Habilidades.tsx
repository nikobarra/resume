import { Code, Users, Brain, Wrench } from "lucide-react";
import cvData from "../cvjson.json";

const Habilidades = () => {
    const { conocimientos_tecnicos, habilidades_blandas } = cvData;

    const renderSkillTags = (skills: string[], color: string) => (
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}
                >
                    {skill}
                </span>
            ))}
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Habilidades y Conocimientos
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Conocimientos Técnicos */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Code size={20} className="text-orange-500" />
                            Lenguajes de Programación
                        </h3>
                        {renderSkillTags(
                            conocimientos_tecnicos.lenguajes,
                            "bg-blue-600 text-white"
                        )}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Wrench size={20} className="text-orange-500" />
                            Frameworks y Herramientas
                        </h3>
                        {renderSkillTags(
                            conocimientos_tecnicos.frameworks_y_herramientas,
                            "bg-green-600 text-white"
                        )}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Brain size={20} className="text-orange-500" />
                            Metodologías
                        </h3>
                        {renderSkillTags(
                            conocimientos_tecnicos.metodologias,
                            "bg-purple-600 text-white"
                        )}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Wrench size={20} className="text-orange-500" />
                            Otros Conocimientos
                        </h3>
                        {renderSkillTags(
                            conocimientos_tecnicos.otros,
                            "bg-gray-600 text-white"
                        )}
                    </div>
                </div>

                {/* Habilidades Blandas */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Users size={20} className="text-orange-500" />
                        Habilidades Blandas
                    </h3>
                    {renderSkillTags(
                        habilidades_blandas,
                        "bg-orange-600 text-white"
                    )}
                </div>
            </div>
        </div>
    );
};

export default Habilidades;
