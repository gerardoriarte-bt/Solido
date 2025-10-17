/**
 * Design Tokens - Paleta de Colores Sólido Business Law
 * Inspirado en el estilo minimalista y moderno de Viralistic
 */

export const colors = {
  // Paleta Principal - Colores personalizados
  primary: {
    main: '#1F2330', // Color principal oscuro
    light: '#2A3140',
    dark: '#1A1E28',
    contrastText: '#FFFFFF',
  },
  
  secondary: {
    main: '#242C27', // Color secundario verde oscuro
    light: '#2F3A33',
    dark: '#1E2521',
    contrastText: '#FFFFFF',
  },
  
  background: {
    default: '#1F2330', // Fondo principal
    paper: '#242C27', // Fondo de elementos
    dark: '#1A1E28',
    light: '#2A3140',
  },
  
  text: {
    primary: '#FFFFFF', // Texto principal blanco
    secondary: '#B8C5B8', // Texto secundario verde claro
    disabled: '#8A9A8A',
    contrastText: '#1F2330',
  },
  
  neutral: {
    main: '#B8C5B8',
    light: '#D4E0D4',
    dark: '#8A9A8A',
    contrastText: '#1F2330',
  },
  
  // Colores semánticos con nueva paleta
  success: {
    main: '#B8C5B8',
    light: '#D4E0D4',
    dark: '#8A9A8A',
    contrastText: '#1F2330',
  },
  warning: {
    main: '#D4A574',
    light: '#E6C299',
    dark: '#B8935A',
    contrastText: '#1F2330',
  },
  error: {
    main: '#C47A7A',
    light: '#D49999',
    dark: '#A85A5A',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#7A9AC4',
    light: '#99B3D4',
    dark: '#5A7AA8',
    contrastText: '#FFFFFF',
  },
  
  // Gradientes con nueva paleta
  gradients: {
    primary: 'linear-gradient(135deg, #1F2330 0%, #2A3140 100%)',
    secondary: 'linear-gradient(135deg, #242C27 0%, #2F3A33 100%)',
    subtle: 'linear-gradient(135deg, #2A3140 0%, #1F2330 100%)',
    dark: 'linear-gradient(135deg, #1A1E28 0%, #1F2330 100%)',
  },
  
  // Colores de superficie
  surface: {
    main: '#242C27',
    elevated: '#2F3A33',
    overlay: 'rgba(31, 35, 48, 0.8)',
  },
} as const;

export type Colors = typeof colors;
