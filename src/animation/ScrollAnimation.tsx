import type { Variants } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type ScrollAnimationProps = {
  children: ReactNode;
  variants: Variants;
};

const ScrollAnimation = ({ children, variants }: ScrollAnimationProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { ScrollAnimation };
