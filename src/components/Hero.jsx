import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      {/* Fixed Navbar */}
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
          padding: '1.75rem clamp(2rem, 5vw, 4rem)',
          backgroundColor: 'rgba(244,243,239,0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 38, height: 38,
            backgroundColor: 'var(--accent-base)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#FFF', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1 }}>M</span>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
            Maxime Fivet<span style={{ color: 'var(--accent-base)' }}>.</span>
          </span>
        </div>

        {/* Nav Links - Desktop Only */}
        <div className="nav-desktop" style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }}>
          {[
            { label: 'Réalisations', href: '#projets' },
            { label: 'Pourquoi moi ?', href: '#avantages' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                letterSpacing: '0.01em',
                transition: 'color 0.25s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text-main)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.9rem' }}>
            Demander un devis
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[var(--bg-main)]"
        style={{ paddingTop: 'clamp(8rem, 18vh, 12rem)', paddingBottom: 'clamp(6rem, 14vh, 10rem)' }}>

        {/* Subtle Side Decorators */}
        <div className="side-decor-left" style={{
          position: 'absolute', left: 'clamp(2rem, 5vw, 4rem)', top: '50%', transform: 'translateY(-50%)',
          display: 'none', flexDirection: 'column', gap: 8, alignItems: 'center',
        }}>
          <div style={{ width: 1, height: 80, backgroundColor: 'var(--border-dark)' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.15em', writingMode: 'vertical-rl', textTransform: 'uppercase' }}>
            Belgique
          </span>
          <div style={{ width: 1, height: 80, backgroundColor: 'var(--border-dark)' }} />
        </div>

        <div className="container max-w-4xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ marginBottom: '2.5rem' }}
          >
            <span style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-base)',
              textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 40, height: 1, backgroundColor: 'var(--accent-base)', display: 'inline-block' }} />
              Développeur Web Indépendant
              <span style={{ width: 40, height: 1, backgroundColor: 'var(--accent-base)', display: 'inline-block' }} />
            </span>
          </motion.div>

          <motion.h1
            style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 900, lineHeight: 1.07, marginBottom: '2.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Des sites web qui attirent<br className="hidden md:block" />
            vos clients et développent<br className="hidden md:block" />
            <span style={{ color: 'var(--accent-base)' }}>votre business.</span>
          </motion.h1>
          
          <motion.p
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: 'var(--text-muted)', lineHeight: 1.65, maxWidth: 680, margin: '0 auto 3.5rem', fontFamily: 'var(--font-body)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Artisans, restaurateurs, professionnels : obtenez une vitrine digitale performante, unique et conçue pour convertir vos visiteurs en clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1.25rem' }}
          >
            <a href="#projets" className="btn-primary">Voir les réalisations</a>
            <a href="#contact" className="btn-outline">Demander un devis</a>
          </motion.div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .nav-desktop { display: flex !important; }
            .side-decor-left { display: flex !important; }
          }
        `}</style>
      </section>
    </>
  );
};

export default Hero;
