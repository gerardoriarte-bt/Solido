/**
 * ParticleBackground Component - Sólido Business Law
 * Fondo animado con partículas sutiles y delicadas
 */

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  speed?: number;
  opacity?: number;
  color?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  speed = 0.5,
  opacity = 0.3,
  color = '#B8C5B8',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Inicializar partículas
    const initParticles = () => {
      particlesRef.current = [];
      const rect = canvas.getBoundingClientRect();
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * opacity + 0.2,
          life: Math.random() * 100,
          maxLife: 100,
        });
      }
    };

    initParticles();

    // Función de animación
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      particlesRef.current.forEach((particle) => {
        // Actualizar posición
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Actualizar vida
        particle.life -= 0.5;
        particle.opacity = (particle.life / particle.maxLife) * opacity;

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > rect.width) {
          particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > rect.height) {
          particle.vy *= -1;
        }

        // Mantener dentro del canvas
        particle.x = Math.max(0, Math.min(rect.width, particle.x));
        particle.y = Math.max(0, Math.min(rect.height, particle.y));

        // Renovar partícula si se desvanece
        if (particle.life <= 0) {
          particle.x = Math.random() * rect.width;
          particle.y = Math.random() * rect.height;
          particle.life = particle.maxLife;
          particle.opacity = Math.random() * opacity + 0.2;
        }

        // Dibujar partícula
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, speed, opacity, color]);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </Box>
  );
};

export default ParticleBackground;
