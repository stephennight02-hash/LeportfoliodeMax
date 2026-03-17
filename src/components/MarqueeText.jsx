import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  'REACT', '✦', 'TAILWIND CSS', '✦', 'VITE.JS', '✦', 'FRAMER MOTION', '✦', 'UI/UX', '✦',
  'TYPESCRIPT', '✦', 'NODE.JS', '✦', 'GSAP', '✦', 'THREE.JS', '✦',
];

const MarqueeText = () => {
  const content = [...ITEMS, ...ITEMS]; // duplicate for seamless loop

  return (
    <section
      style={{
        padding: '6rem 0',
        borderTop: '1px solid #1a1a1a',
        borderBottom: '1px solid #1a1a1a',
        overflow: 'hidden',
        backgroundColor: '#050505',
        position: 'relative',
      }}
    >
      {/* Label */}
      <div style={{
        position: 'absolute',
        top: 24,
        left: '8vw',
        fontFamily: "'Inter', sans-serif",
        fontSize: 11,
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: '#555',
      }}>
        03 — Stack Technique
      </div>

      {/* Top marquee — left to right */}
      <div style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          style={{
            display: 'flex',
            gap: '2rem',
            width: 'max-content',
            alignItems: 'center',
          }}
        >
          {content.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Teko', sans-serif",
                fontSize: 'clamp(48px, 7vw, 96px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                color: item === '✦' ? '#CCFF00' : '#EDEDED',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom marquee — right to left */}
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
          style={{
            display: 'flex',
            gap: '2rem',
            width: 'max-content',
            alignItems: 'center',
          }}
        >
          {[...content].reverse().map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Teko', sans-serif",
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                color: item === '✦' ? '#FF3366' : '#333',
                whiteSpace: 'nowrap',
              }}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeText;
