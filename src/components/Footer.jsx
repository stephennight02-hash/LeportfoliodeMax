import { motion } from 'framer-motion';

const ContactCard = ({ icon, label, value, href, colorBg, colorText }) => (
  <motion.a
    href={href}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: 'var(--bg-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(1.5rem, 4vw, 2.5rem)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-subtle)',
      textDecoration: 'none',
      flex: '1 1 250px',
      transition: 'box-shadow 0.3s',
      cursor: 'pointer',
    }}
    className="hover:shadow-lg"
  >
    {/* Icon */}
    <div style={{
      width: 48, height: 48,
      borderRadius: 12,
      backgroundColor: colorBg,
      color: colorText,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '1.5rem',
    }}>
      {icon}
    </div>

    {/* Text */}
    <div>
      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 4 }}>
        {label}
      </p>
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--text-main)', lineHeight: 1.3 }}>
        {value}
      </p>
    </div>
  </motion.a>
);

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--bg-footer)', padding: 'clamp(5rem, 12vw, 8rem) 0 3rem' }}>
      <div className="container max-w-4xl">

        {/* Main CTA Header - Now Light & Friendly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 'clamp(3rem, 8vw, 5rem)', textAlign: 'center' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text-main)',
            marginBottom: '1.5rem',
          }}>
            Votre projet mérite <br className="hidden md:block"/>
            <span style={{ color: 'var(--accent-base)' }}>un professionnel.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
            Première discussion gratuite et sans engagement. Réponse garantie sous 24h ouvrées.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginBottom: 'clamp(4rem, 10vw, 6rem)',
        }}>
          <ContactCard
            label="Email direct"
            value="maxime.fivet004@gmail.com"
            href="mailto:maxime.fivet004@gmail.com"
            colorBg="var(--accent-ocean-light)"
            colorText="var(--accent-ocean)"
            icon={
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
              </svg>
            }
          />
          <ContactCard
            label="Appel téléphonique"
            value="+32 470 30 30 19"
            href="tel:+32470303019"
            colorBg="var(--accent-indigo-light)"
            colorText="var(--accent-base)"
            icon={
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
              </svg>
            }
          />
        </div>

        {/* Bottom Bar - Clean minimal */}
        <div style={{
          borderTop: '1px solid var(--border-dark)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
        }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)' }}>
            Maxime Fivet <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>— Développeur Web</span>
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Tous droits réservés. Construit en Belgique.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
