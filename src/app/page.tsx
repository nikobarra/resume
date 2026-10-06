import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Perfil from "@/components/Perfil";
import Habilidades from "@/components/Habilidades";
import Experiencia from "@/components/Experiencia";
import Proyectos from "@/components/Proyectos";
import Educacion from "@/components/Educacion";
import Certificaciones from "@/components/Certificaciones";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-canvas text-white">
            <Navbar />
            <div id="contenido" tabIndex={-1} className="pt-16 outline-none">
                <Header />
                <section id="perfil" className="py-12">
                    <Perfil />
                </section>
                <section id="habilidades" className="py-12 bg-surface">
                    <Habilidades />
                </section>
                <section id="experiencia" className="py-12">
                    <Experiencia />
                </section>
                <section id="proyectos" className="py-12 bg-surface">
                    <Proyectos />
                </section>
                <section id="educacion" className="py-12">
                    <Educacion />
                </section>
                <section id="certificaciones" className="py-12 bg-surface">
                    <Certificaciones />
                </section>
            </div>
            <Footer />
        </main>
    );
}
