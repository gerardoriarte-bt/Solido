/**
 * Global Background Component
 * Fondo con degradado y múltiples capas para todo el sitio
 */

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const GlobalBackground: React.FC = () => {
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

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {/* Capa base con degradado principal */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(135deg, 
              #1F2330 0%, 
              #2A3140 25%, 
              #242C27 50%, 
              #2F3A33 75%, 
              #1F2330 100%
            )
          `,
        }}
      />

      {/* Capa de degradado radial interactivo */}
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
              transparent 50%
            )
          `,
          transition: 'background 0.3s ease',
        }}
      />

      {/* Capa de patrones geométricos sutiles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(184, 197, 184, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(184, 197, 184, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(47, 58, 51, 0.03) 0%, transparent 50%)
          `,
          backgroundSize: '400px 400px, 600px 600px, 300px 300px',
          backgroundPosition: '0 0, 200px 200px, 100px 100px',
        }}
      />

      {/* Elementos flotantes animados */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {/* Círculos flotantes grandes */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184, 197, 184, 0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            top: '60%',
            right: '10%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184, 197, 184, 0.06) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />

        {/* Elementos geométricos */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '20%',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(45deg, rgba(184, 197, 184, 0.04), transparent)',
            borderRadius: '20px',
            filter: 'blur(20px)',
          }}
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '15%',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, rgba(47, 58, 51, 0.04), transparent)',
            borderRadius: '50%',
            filter: 'blur(15px)',
          }}
        />

        {/* Líneas dinámicas */}
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            top: '40%',
            left: '10%',
            width: '300px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.15), transparent)',
            transform: 'rotate(45deg)',
            filter: 'blur(1px)',
          }}
        />

        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            position: 'absolute',
            bottom: '30%',
            right: '20%',
            width: '250px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.12), transparent)',
            transform: 'rotate(-30deg)',
            filter: 'blur(1px)',
          }}
        />
      </Box>

      {/* Capa de overlay sutil */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(180deg, 
              rgba(31, 35, 48, 0.1) 0%, 
              transparent 20%, 
              transparent 80%, 
              rgba(36, 44, 39, 0.1) 100%
            )
          `,
        }}
      />
    </Box>
  );
};

export default GlobalBackground;
