import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 12 + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
      }
      setProgress(Math.min(Math.round(current), 100));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ y: '0%' }}
          exit={{
            y: '-100%',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#050505',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '10vh 8vw',
            overflow: 'hidden',
          }}
        >
          {/* Progress bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: 2,
              width: `${progress}%`,
              backgroundColor: '#CCFF00',
              transition: 'width 0.1s linear',
            }}
          />

          {/* Brand name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              color: '#555',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            Creative Developer ✦ Portfolio
          </motion.p>

          {/* Counter */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              style={{
                fontFamily: "'Teko', sans-serif",
                fontSize: 'clamp(80px, 18vw, 200px)',
                fontWeight: 700,
                color: '#EDEDED',
                lineHeight: 0.85,
                letterSpacing: '-0.02em',
              }}
            >
              {String(progress).padStart(2, '0')}
            </motion.h1>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(11px, 1.2vw, 13px)',
                color: '#CCFF00',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Chargement...
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
