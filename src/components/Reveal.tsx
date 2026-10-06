"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

// Aparición al entrar en pantalla: guía la lectura sección por sección.
// Con "reducir movimiento", MotionConfig (en LanguageProvider) quita el desplazamiento.
const Reveal = ({ children }: { children: ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

export default Reveal;
