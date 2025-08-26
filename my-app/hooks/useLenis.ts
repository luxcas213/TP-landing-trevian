"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// Un "custom hook": encapsula la lógica del scroll suave
export default function useLenis() {
  useEffect(() => {
    // 1. Crear una instancia de Lenis con opciones
    const lenis = new Lenis({
      duration: 1.2,      // velocidad del scroll
      easing: (t: number) => t, // función de suavizado
    });

    // 2. Loop de animación: se llama cada frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Cleanup: destruir cuando el componente se desmonta
    return () => {
      lenis.destroy();
    };
  }, []); // [] => solo corre una vez al montar
}
