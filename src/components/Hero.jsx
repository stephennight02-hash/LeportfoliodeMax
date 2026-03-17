import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      {/* Fixed Navbar - Clean & Light */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem clamp(1.5rem, 5vw, 3rem)',
          backgroundColor: 'rgba(255, 255, 255, 0.90)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        {/* Logo - Universally appealing Blue */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            backgroundColor: 'var(--accent-base)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)',
          }}>
            <span style={{ color: '#FFF', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1 }}>M</span>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
            Maxime Fivet<span style={{ color: 'var(--accent-base)' }}>.</span>
          </span>
        </div>

        {/* Nav Links - Desktop Only */}
        <div className="nav-desktop" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {[
            { label: 'Réalisations', href: '#projets' },
            { label: 'Mon approche', href: '#avantages' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text-main)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}>
            Demander un devis
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[var(--bg-main)]"
        style={{ paddingTop: 'clamp(7rem, 15vh, 10rem)', paddingBottom: 'clamp(4rem, 10vh, 8rem)' }}>

        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none" />

        <div className="container max-w-4xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ marginBottom: '1.5rem' }}
          >
            <span style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--accent-base)',
              textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              backgroundColor: 'var(--accent-indigo-light)',
              padding: '0.4rem 1rem',
              borderRadius: '999px',
            }}>
              Développeur Web Indépendant
            </span>
          </motion.div>

          <motion.h1
            style={{ 
              fontSize: 'clamp(2.5rem, 7vw, 5rem)', 
              fontWeight: 800, 
              lineHeight: 1.1, 
              marginBottom: '1.5rem', 
              color: 'var(--text-main)', 
              fontFamily: 'var(--font-display)', 
              letterSpacing: '-0.03em' 
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Des sites vitrines qui<br className="hidden md:block" />
            inspirent confiance et<br className="hidden md:block" />
            <span style={{ color: 'var(--accent-base)' }}>développent vos ventes.</span>
          </motion.h1>
          
          <motion.p
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              color: 'var(--text-muted)', 
              lineHeight: 1.6, 
              maxWidth: 600, 
              margin: '0 auto 2.5rem', 
              fontFamily: 'var(--font-body)' 
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Artisans, professionnels et créateurs : obtenez une plateforme digitale claire, moderne et pensée pour transformer vos visiteurs en clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
          >
            <a href="#projets" className="btn-primary w-full sm:w-auto">Voir les réalisations</a>
            <a href="#contact" className="btn-outline w-full sm:w-auto">Demander un devis</a>
          </motion.div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .nav-desktop { display: flex !important; }
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
