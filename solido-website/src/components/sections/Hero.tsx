/**
 * Hero Component - Sólido Business Law
 * Diseño minimalista con fondo futurista e interactivo
 */

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';
import { motion } from 'framer-motion';
import { scrollToSection } from '../../utils/scrollUtils';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#1F2330',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
          }}
    >
      {/* Fondo con Imagen del Bosque */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/bosque-fondo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(ellipse 80% 50% at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(184, 197, 184, 0.15) 0%, 
                transparent 60%),
              linear-gradient(180deg, 
                rgba(31, 35, 48, 0.85) 0%, 
                rgba(26, 30, 40, 0.9) 100%)
            `,
            zIndex: 1,
          },
        }}
      />
      
      {/* Líneas de Grid Sutiles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(184, 197, 184, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(184, 197, 184, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          zIndex: 2,
          opacity: 0.4,
        }}
      />

      {/* Elementos Geométricos Premium Sutiles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
        {/* Líneas horizontales sutiles */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            top: '25%',
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.3), transparent)',
          }}
        />
        
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            position: 'absolute',
            bottom: '30%',
            left: '15%',
            right: '15%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.25), transparent)',
          }}
        />

        {/* Puntos de luz sutiles */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '20%',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(184, 197, 184, 0.6)',
            boxShadow: '0 0 20px rgba(184, 197, 184, 0.4)',
          }}
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '25%',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: 'rgba(184, 197, 184, 0.5)',
            boxShadow: '0 0 15px rgba(184, 197, 184, 0.3)',
          }}
        />
      </Box>

      {/* Contenido Principal */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 4 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              textAlign: 'left',
              maxWidth: { xs: '100%', md: '900px', lg: '1100px' },
              mx: 'auto',
              px: { xs: 4, md: 6 },
            }}
          >
            {/* Subtítulo Superior Premium */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '0.6875rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  color: '#B8C5B8',
                  mb: 3,
                  textTransform: 'uppercase',
                  opacity: 0.9,
                  display: 'block',
                }}
              >
                {subtitle}
              </Typography>
            </motion.div>

            {/* Main Title - Estilo Apple */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 4,
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                {title}
              </Typography>
            </motion.div>

            {/* Description - Tipografía Refinada Apple */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9375rem', md: '1.0625rem', lg: '1.1875rem' },
                  lineHeight: 1.7,
                  mb: 8,
                  color: '#B8C5B8',
                  fontWeight: 400,
                  maxWidth: '600px',
                  letterSpacing: '0em',
                }}
              >
                {description}
              </Typography>
            </motion.div>

            {/* CTA Button - Premium y Minimalista */}
            <motion.div variants={itemVariants}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  if (ctaHref.startsWith('#')) {
                    const sectionId = ctaHref.substring(1);
                    scrollToSection(sectionId, 80);
                  } else {
                    window.location.href = ctaHref;
                  }
                }}
                sx={{
                  fontSize: '0.8125rem',
                  px: 5,
                  py: 2,
                  borderRadius: 0,
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  backgroundColor: 'transparent',
                  color: '#B8C5B8',
                  border: '1px solid rgba(184, 197, 184, 0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  '&:hover': {
                    backgroundColor: 'rgba(184, 197, 184, 0.15)',
                    borderColor: '#B8C5B8',
                    color: '#FFFFFF',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 20px rgba(184, 197, 184, 0.2)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.1), transparent)',
                    transition: 'left 0.6s ease',
                  },
                  '&:hover::before': {
                    left: '100%',
                  },
                }}
              >
                {ctaText}
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;