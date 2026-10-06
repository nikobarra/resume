import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Perfil from "@/components/Perfil";
import Habilidades from "@/components/Habilidades";
import Experiencia from "@/components/Experiencia";
import Proyectos from "@/components/Proyectos";
import Educacion from "@/components/Educacion";
import Certificaciones from "@/components/Certificaciones";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
    return (
        <main className="flex flex-col min-h-[100dvh] bg-canvas text-paper">
            <Navbar />
            <div id="contenido" tabIndex={-1} className="pt-16 outline-none">
                <Header />
                <section id="perfil" className="py-12">
                    <Reveal>
                        <Perfil />
                    </Reveal>
                </section>
                <section id="habilidades" className="py-12 bg-surface">
                    <Reveal>
                        <Habilidades />
                    </Reveal>
                </section>
                <section id="experiencia" className="py-12">
                    <Reveal>
                        <Experiencia />
                    </Reveal>
                </section>
                <section id="proyectos" className="py-12 bg-surface">
                    <Reveal>
                        <Proyectos />
                    </Reveal>
                </section>
                <section id="educacion" className="py-12">
                    <Reveal>
                        <Educacion />
                    </Reveal>
                </section>
                <section id="certificaciones" className="py-12 bg-surface">
                    <Reveal>
                        <Certificaciones />
                    </Reveal>
                </section>
            </div>
            <Footer />
        </main>
    );
}
