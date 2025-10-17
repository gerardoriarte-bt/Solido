/**
 * Componente para efectos de texto durante el scroll
 */

import React, { useRef, useEffect, useState } from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { motion, useInView } from 'framer-motion';

interface ScrollTextProps extends TypographyProps {
  children: string;
  animationType?: 'word' | 'letter' | 'line';
  delay?: number;
  stagger?: number;
}

const ScrollText: React.FC<ScrollTextProps> = ({
  children,
  animationType = 'word',
  delay = 0,
  stagger = 0.1,
  ...typographyProps
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const splitText = () => {
    switch (animationType) {
      case 'letter':
        return children.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: delay + (index * stagger),
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ));
      case 'word':
        return children.split(' ').map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.6,
              delay: delay + (index * stagger),
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ));
      case 'line':
        return children.split('\n').map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 0.7,
              delay: delay + (index * stagger),
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {line}
          </motion.div>
        ));
      default:
        return children;
    }
  };

  return (
    <Typography ref={ref} {...typographyProps}>
      {splitText()}
    </Typography>
  );
};

export default ScrollText;
