/**
 * AnimatedCounter Component - Sólido Business Law
 * Contador que se anima durante el scroll
 */

import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  sx?: any;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  variant = 'h2',
  color,
  sx,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current)
  );

  useEffect(() => {
    if (isInView) {
      spring.set(end);
    }
  }, [isInView, end, spring]);

  useEffect(() => {
    const unsubscribe = display.onChange((latest) => {
      setCount(latest);
    });
    return unsubscribe;
  }, [display]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant={variant}
          sx={{
            color,
            fontWeight: 'bold',
            ...sx,
          }}
        >
          {prefix}{count}{suffix}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default AnimatedCounter;
