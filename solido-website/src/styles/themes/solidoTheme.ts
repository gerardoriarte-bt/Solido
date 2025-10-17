/**
 * Tema personalizado de Material-UI para Sólido Business Law
 * Implementa la paleta de colores y tipografía definida en los Design Tokens
 */

import { createTheme } from '@mui/material/styles';
import { colors } from '../tokens/colors';
import { typography } from '../tokens/typography';
import { spacing, borderRadius, shadows } from '../tokens/spacing';

export const solidoTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: colors.neutral.main,
      600: colors.neutral.dark,
      700: '#374151',
      800: '#1F2937',
      900: colors.primary.main,
    },
    success: {
      main: colors.success.main,
      light: colors.success.light,
      dark: colors.success.dark,
      contrastText: colors.success.contrastText,
    },
    warning: {
      main: colors.warning.main,
      light: colors.warning.light,
      dark: colors.warning.dark,
      contrastText: colors.warning.contrastText,
    },
    error: {
      main: colors.error.main,
      light: colors.error.light,
      dark: colors.error.dark,
      contrastText: colors.error.contrastText,
    },
    info: {
      main: colors.info.main,
      light: colors.info.light,
      dark: colors.info.dark,
      contrastText: colors.info.contrastText,
    },
  },
  
  typography: {
    fontFamily: typography.fontFamily.primary,
    
    // Display Styles - Bold y grande como Viralistic
    h1: {
      fontFamily: typography.fontFamily.accent,
      fontSize: typography.fontSize['6xl'],
      fontWeight: typography.fontWeight.black,
      lineHeight: typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.tighter,
    },
    h2: {
      fontFamily: typography.fontFamily.accent,
      fontSize: typography.fontSize['5xl'],
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.tight,
    },
    h3: {
      fontFamily: typography.fontFamily.accent,
      fontSize: typography.fontSize['4xl'],
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.snug,
      letterSpacing: typography.letterSpacing.normal,
    },
    h4: {
      fontFamily: typography.fontFamily.accent,
      fontSize: typography.fontSize['3xl'],
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    h5: {
      fontFamily: typography.fontFamily.accent,
      fontSize: typography.fontSize['2xl'],
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.normal,
    },
    h6: {
      fontFamily: typography.fontFamily.accent,
      fontSize: typography.fontSize.xl,
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.normal,
    },

    // Body Text - Limpio y legible
    body1: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.regular,
      lineHeight: typography.lineHeight.relaxed,
      letterSpacing: typography.letterSpacing.normal,
    },
    body2: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.regular,
      lineHeight: typography.lineHeight.relaxed,
      letterSpacing: typography.letterSpacing.normal,
    },

    // Button Text - Bold
    button: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.none,
      letterSpacing: typography.letterSpacing.normal,
      textTransform: 'none' as const,
    },

    // Caption
    caption: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.regular,
      lineHeight: typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.wide,
    },

    // Overline
    overline: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.widest,
      textTransform: 'uppercase',
    },
  },
  
  spacing: 8, // Material-UI spacing unit (8px)
  
  shape: {
    borderRadius: parseInt(borderRadius.md),
  },
  
  shadows: [
    'none',
    shadows.sm,
    shadows.base,
    shadows.md,
    shadows.lg,
    shadows.xl,
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
    shadows['2xl'],
  ],
  
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.lg,
          padding: `${spacing.sm} ${spacing.lg}`,
          fontSize: typography.fontSize.base,
          fontWeight: typography.fontWeight.medium,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: shadows.md,
            transform: 'translateY(-1px)',
            transition: 'all 0.2s ease-in-out',
          },
        },
        contained: {
          backgroundColor: colors.secondary.main,
          color: colors.secondary.contrastText,
          '&:hover': {
            backgroundColor: colors.secondary.dark,
          },
        },
        outlined: {
          borderColor: colors.secondary.main,
          color: colors.secondary.main,
          '&:hover': {
            backgroundColor: colors.secondary.main,
            color: colors.secondary.contrastText,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius.lg,
          boxShadow: shadows.base,
          '&:hover': {
            boxShadow: shadows.lg,
            transform: 'translateY(-2px)',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.default,
          color: colors.primary.main,
          boxShadow: shadows.sm,
        },
      },
    },
  },
});

export default solidoTheme;
