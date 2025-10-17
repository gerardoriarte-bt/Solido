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
      {/* Fondo Futurista Interactivo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(184, 197, 184, 0.1) 0%, 
              transparent 50%),
            linear-gradient(135deg, 
              #1F2330 0%, 
              #1A1E28 25%, 
              #242C27 50%, 
              #1E2521 75%, 
              #1F2330 100%)
          `,
          zIndex: 1,
        }}
      />

      {/* Elementos Geométricos Flotantes */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
        }}
      >
        {/* Círculos flotantes */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '60px',
            height: '60px',
            border: '1px solid rgba(184, 197, 184, 0.3)',
            borderRadius: '50%',
            background: 'rgba(184, 197, 184, 0.05)',
          }}
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '40px',
            height: '40px',
            border: '1px solid rgba(184, 197, 184, 0.2)',
            borderRadius: '50%',
            background: 'rgba(184, 197, 184, 0.03)',
          }}
        />

        {/* Líneas dinámicas */}
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '20%',
            width: '200px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.5), transparent)',
            transform: 'rotate(45deg)',
          }}
        />

        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            position: 'absolute',
            bottom: '25%',
            left: '20%',
            width: '150px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.5), transparent)',
            transform: 'rotate(-30deg)',
          }}
        />

        {/* Cuadrados rotantes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            top: '15%',
            right: '30%',
            width: '30px',
            height: '30px',
            border: '1px solid rgba(184, 197, 184, 0.4)',
            background: 'rgba(184, 197, 184, 0.05)',
          }}
        />
      </Box>

      {/* Contenido Principal */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            {/* Logo */}
            <motion.div variants={itemVariants}>
              <Box
                component="img"
                src="/logo_solido_negro.png"
                alt="Sólido Business Law"
                sx={{
                  height: { xs: 60, md: 80 },
                  mb: 6,
                  filter: 'invert(1) brightness(1.2)',
                }}
              />
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 4,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  textShadow: '0 0 30px rgba(184, 197, 184, 0.3)',
                }}
              >
                {title}
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.75rem' },
                  fontWeight: 400,
                  color: '#B8C5B8',
                  mb: 6,
                  letterSpacing: '0.05em',
                  opacity: 0.9,
                }}
              >
                {subtitle}
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  mb: 8,
                  color: '#FFFFFF',
                  fontWeight: 400,
                  maxWidth: '700px',
                  mx: 'auto',
                  opacity: 0.85,
                }}
              >
                {description}
              </Typography>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button
                variant="contained"
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
                  fontSize: '1.125rem',
                  px: 8,
                  py: 3,
                  borderRadius: 0,
                  textTransform: 'none',
                  fontWeight: 700,
                  backgroundColor: '#B8C5B8',
                  color: '#1F2330',
                  border: '2px solid #77E077',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    backgroundColor: '#D4E0D4',
                    borderColor: '#D4E0D4',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 30px rgba(184, 197, 184, 0.4)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transition: 'left 0.5s',
                  },
                  '&:hover::before': {
                    left: '100%',
                  },
                  transition: 'all 0.3s ease',
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