/**
 * Card Component con efecto de vidrio esmerilado (Glassmorphism)
 * Diseño minimalista inspirado en Viralistic
 */

import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

interface GlassCardProps {
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({
  title,
  description,
  features = [],
  ctaText,
  ctaHref,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const handleCardClick = () => {
    if (ctaHref && ctaHref.startsWith('#')) {
      const sectionId = ctaHref.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (ctaHref) {
      window.location.href = ctaHref;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: false }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
      style={{ cursor: ctaHref ? 'pointer' : 'default' }}
    >
      <Box
        sx={{
          p: 6,
          borderRadius: 4,
          background: '#242C27',
          border: '1px solid rgba(184, 197, 184, 0.2)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '360px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            transform: 'translateY(-12px) scale(1.02)',
            background: '#2F3A33',
            border: '1px solid rgba(184, 197, 184, 0.4)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          },
        }}
      >
        {/* Efecto de brillo interno */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.6), transparent)',
            opacity: isHovered ? 1 : 0.3,
            transition: 'opacity 0.4s ease',
            borderRadius: '4px 4px 0 0',
          }}
        />
        
        {/* Efecto de gradiente interno */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(184, 197, 184, 0.05) 0%, transparent 50%)',
            opacity: isHovered ? 1 : 0.5,
            transition: 'opacity 0.4s ease',
            borderRadius: 4,
          }}
        />

        {/* Contenido principal */}
        <Box sx={{ flex: 1, position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: '#FFFFFF',
              fontSize: '1.5rem',
              lineHeight: 1.3,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#E8F0E8',
              lineHeight: 1.6,
              mb: 5,
              fontSize: '1.125rem',
              fontWeight: 400,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
            }}
          >
            {description}
          </Typography>

          {/* Features list */}
          {features.length > 0 && (
            <Box sx={{ mb: 4 }}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.8, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#D4E0D4',
                      mb: 1.5,
                      fontSize: '0.95rem',
                      fontWeight: 400,
                      position: 'relative',
                      pl: 3,
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#B8C5B8',
                        boxShadow: '0 0 8px rgba(184, 197, 184, 0.4)',
                      },
                    }}
                  >
                    {feature}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          )}
        </Box>

        {/* CTA Button */}
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3 }}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <Button
              variant="outlined"
              size="medium"
              sx={{
                width: '100%',
                fontSize: '0.95rem',
                px: 4,
                py: 2,
                borderRadius: 3,
                fontWeight: 600,
                borderColor: 'rgba(184, 197, 184, 0.3)',
                color: '#FFFFFF',
                borderWidth: '1px',
                background: '#1F2330',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: '#2F3A33',
                  color: '#FFFFFF',
                  borderColor: 'rgba(184, 197, 184, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(184, 197, 184, 0.2)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  transition: 'left 0.5s',
                },
                '&:hover::before': {
                  left: '100%',
                },
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {ctaText}
            </Button>
          </motion.div>
        )}

        {/* Efecto de partículas flotantes */}
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '12%',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184, 197, 184, 0.6) 0%, transparent 70%)',
            opacity: isHovered ? 1 : 0.4,
            transition: 'opacity 0.4s ease',
            boxShadow: '0 0 6px rgba(184, 197, 184, 0.3)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '18%',
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184, 197, 184, 0.4) 0%, transparent 70%)',
            opacity: isHovered ? 0.8 : 0.2,
            transition: 'opacity 0.4s ease',
            boxShadow: '0 0 4px rgba(184, 197, 184, 0.2)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            right: '25%',
            width: '1px',
            height: '1px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184, 197, 184, 0.3) 0%, transparent 70%)',
            opacity: isHovered ? 0.6 : 0.1,
            transition: 'opacity 0.4s ease',
            boxShadow: '0 0 3px rgba(184, 197, 184, 0.1)',
          }}
        />
      </Box>
    </motion.div>
  );
};

export default GlassCard;
