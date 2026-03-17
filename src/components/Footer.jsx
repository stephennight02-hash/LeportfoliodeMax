import { motion } from 'framer-motion';

const ContactCard = ({ icon, label, value, href, color }) => (
  <motion.a
    href={href}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1rem',
      backgroundColor: 'var(--bg-surface)',
      borderRadius: 20,
      padding: 'clamp(2rem, 4vw, 3rem)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-subtle)',
      textDecoration: 'none',
      flex: 1,
      transition: 'box-shadow 0.4s',
      cursor: 'pointer',
      minWidth: 260,
    }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-hover)'}
    onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
  >
    {/* Icon */}
    <div style={{
      width: 56, height: 56,
      borderRadius: 14,
      backgroundColor: color + '15',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ color: color, lineHeight: 0 }}>{icon}</div>
    </div>

    {/* Text */}
    <div>
      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>
        {label}
      </p>
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)', color: 'var(--text-main)', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
        {value}
      </p>
    </div>

    {/* Arrow */}
    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 6, color: color, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem' }}>
      Contacter
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
      </svg>
    </div>
  </motion.a>
);

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)', padding: 'clamp(6rem, 14vw, 10rem) 0 3rem', position: 'relative', overflow: 'hidden' }}>
      
      <div className="container max-w-6xl" style={{ position: 'relative', zIndex: 1 }}>

        {/* Main CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ marginBottom: 'clamp(4rem, 10vw, 8rem)', textAlign: 'center' }}
        >
          <span style={{
            display: 'inline-block',
            backgroundColor: 'var(--accent-terra)',
            color: '#FFF',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '0.5rem 1.5rem',
            borderRadius: 999,
            marginBottom: '2.5rem',
          }}>
            Parlons-en
          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text-light)',
            marginBottom: '2rem',
          }}>
            Votre projet mérite<br/>
            <span style={{ color: 'var(--accent-terra)' }}>un site exceptionnel.</span>
          </h2>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(251,249,246,0.6)', maxWidth: 600, margin: '0 auto' }}>
            Première discussion gratuite et sans engagement. Réponse garantie sous 24h.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 'clamp(5rem, 12vw, 9rem)',
          }}
        >
          <ContactCard
            label="Envoyez un email"
            value="maxime.fivet004@gmail.com"
            href="mailto:maxime.fivet004@gmail.com"
            color="var(--accent-terra)"
            icon={
              <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
              </svg>
            }
          />
          <ContactCard
            label="Appelez directement"
            value="+32 470 30 30 19"
            href="tel:+32470303019"
            color="var(--accent-indigo)"
            icon={
              <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
              </svg>
            }
          />
        </motion.div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(251,249,246,0.1)',
          paddingTop: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'var(--accent-terra)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#FFF', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem' }}>M</span>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-light)' }}>Maxime Fivet</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(251,249,246,0.5)' }}>Développeur Web Indépendant</p>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(251,249,246,0.4)' }}>
            © {new Date().getFullYear()} — Tous droits réservés.
          </p>

          <a href="#" style={{
            width: 44, height: 44, borderRadius: '50%',
            border: '1px solid rgba(251,249,246,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-light)', transition: 'background-color 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(251,249,246,0.08)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
