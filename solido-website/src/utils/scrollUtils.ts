/**
 * Scroll Utilities - Sólido Business Law
 * Utilidades para navegación suave y scroll reveal
 */

import React from 'react';

/**
 * Scroll suave a una sección específica
 * @param sectionId - ID de la sección a la que hacer scroll
 * @param offset - Offset adicional en píxeles (opcional)
 */
export const scrollToSection = (sectionId: string, offset: number = 0): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

/**
 * Scroll suave al inicio de la página
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * Verifica si un elemento está visible en el viewport
 * @param element - Elemento HTML a verificar
 * @param threshold - Porcentaje del elemento que debe estar visible (0-1)
 * @returns true si el elemento está visible
 */
export const isElementVisible = (element: HTMLElement, threshold: number = 0.1): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold
  );
};

/**
 * Hook para detectar scroll y aplicar efectos
 * @param callback - Función a ejecutar en cada evento de scroll
 * @param dependencies - Dependencias del hook
 */
export const useScrollEffect = (callback: () => void, dependencies: React.DependencyList = []): void => {
  React.useEffect(() => {
    const handleScroll = () => {
      callback();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback, ...dependencies]);
};

/**
 * Formatea texto para destacar palabras clave con color de acento
 * @param text - Texto a formatear
 * @param keywords - Array de palabras clave a destacar
 * @returns Texto con palabras clave destacadas
 */
export const highlightKeywords = (text: string, keywords: string[]): string => {
  let highlightedText = text;
  
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    highlightedText = highlightedText.replace(
      regex, 
      `<span style="color: #00CCFF; font-weight: 600;">${keyword}</span>`
    );
  });
  
  return highlightedText;
};

/**
 * Valida formato de email
 * @param email - Email a validar
 * @returns true si el email es válido
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Sanitiza texto para prevenir XSS
 * @param text - Texto a sanitizar
 * @returns Texto sanitizado
 */
export const sanitizeText = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

/**
 * Debounce function para optimizar eventos frecuentes
 * @param func - Función a ejecutar
 * @param wait - Tiempo de espera en ms
 * @returns Función debounced
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
