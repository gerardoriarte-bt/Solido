/**
 * Componente para elementos con micro interacciones durante el scroll
 */

import React, { useRef } from 'react';
import { Box, BoxProps } from '@mui/material';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface ScrollInteractionProps extends BoxProps {
  children: React.ReactNode;
  animationType?: 'fade' | 'slide' | 'scale' | 'rotate' | 'parallax';
  delay?: number;
  duration?: number;
  threshold?: number;
  parallaxOffset?: number;
}

const ScrollInteraction: React.FC<ScrollInteractionProps> = ({
  children,
  animationType = 'fade',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  parallaxOffset = 50,
  ...boxProps
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: false,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Animaciones base
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration, delay }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const rotateVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { 
      opacity: 1, 
      rotate: 0,
      transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  // Efectos de parallax
  const yParallax = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const getVariants = () => {
    switch (animationType) {
      case 'slide': return slideVariants;
      case 'scale': return scaleVariants;
      case 'rotate': return rotateVariants;
      default: return fadeVariants;
    }
  };

  const getParallaxStyle = () => {
    if (animationType === 'parallax') {
      return {
        y: yParallax,
        opacity: opacityParallax,
      };
    }
    return {};
  };

  return (
    <Box ref={ref} {...boxProps}>
      {animationType === 'parallax' ? (
        <motion.div
          style={getParallaxStyle()}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration, delay }}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          variants={getVariants()}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      )}
    </Box>
  );
};

export default ScrollInteraction;
