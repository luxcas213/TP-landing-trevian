"use client";
import { motion } from "framer-motion";
import useLenis from "@/hooks/useLenis"; // importamos el hook

// Secciones de ejemplo
const sections = [
  { title: "Inicio", bg: "bg-indigo-600" },
  { title: "Acerca de mí", bg: "bg-teal-600" },
  { title: "Servicios", bg: "bg-orange-600" },
  { title: "Contacto", bg: "bg-rose-600" },
];

export default function Page() {
  useLenis(); // 👈 activamos scroll suave

  return (
    <main className="w-full">
      {sections.map((s, i) => (
        <motion.section
          key={i}
          className={`${s.bg} h-screen flex items-center justify-center text-white text-6xl font-bold`}
          initial={{ opacity: 0, y: 100 }} // empieza invisible y abajo
          whileInView={{ opacity: 1, y: 0 }} // aparece al hacer scroll
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }} // se anima al entrar al viewport
        >
          {s.title}
        </motion.section>
      ))}
    </main>
  );
}
