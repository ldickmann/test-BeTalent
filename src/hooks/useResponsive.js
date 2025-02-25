// Arquivo com hooks personalizados
import { useState, useEffect } from "react";

// Hook para verificar se a largura da tela é menor que um determinado breakpoint
export const useResponsive = (breakpoint = 430) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);

    // Debounce para evitar múltiplas chamadas
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener("resize", handleResize);
    checkMobile();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};
