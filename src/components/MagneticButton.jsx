import { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className = '', onClick, href, style = {} }) => {
  const ref = useRef(null);

  // Use framer-motion springs for smoother interpolation
  const springX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.2 });
  const springY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.2 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    // Calculate distance from center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Set to 20% of the distance for a subtle corporate feel (not too wild)
    springX.set(x * 0.2);
    springY.set(y * 0.2);
  };

  const handleMouseLeave = () => {
    springX.set(0);
    springY.set(0);
  };

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', x: springX, y: springY, ...style }}
    >
      <Tag
        href={href}
        target={href && href.startsWith('http') ? '_blank' : undefined}
        rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        className={className}
        style={{ display: 'inline-block' }}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default MagneticButton;
