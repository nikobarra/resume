import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Perfil from "@/components/Perfil";
import Habilidades from "@/components/Habilidades";
import Experiencia from "@/components/Experiencia";
import Educacion from "@/components/Educacion";
import Certificaciones from "@/components/Certificaciones";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-neutral-950 text-white">
            <Navbar />
            <div className="pt-16">
                <Header />
                <section id="perfil" className="py-12">
                    <Perfil />
                </section>
                <section id="habilidades" className="py-12 bg-neutral-900">
                    <Habilidades />
                </section>
                <section id="experiencia" className="py-12">
                    <Experiencia />
                </section>
                <section id="educacion" className="py-12 bg-neutral-900">
                    <Educacion />
                </section>
                <section id="certificaciones" className="py-12">
                    <Certificaciones />
                </section>
            </div>
            <Footer />
        </main>
    );
}
