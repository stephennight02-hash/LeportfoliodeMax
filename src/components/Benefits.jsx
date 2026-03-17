import { motion } from 'framer-motion';

const BENEFITS = [
  {
    num: "01",
    title: "Un Site Qui Génère des Clients",
    description: "L'interface est structurée pour guider subtilement vos visiteurs vers la prise de contact. Chaque bouton, chaque phrase est placé stratégiquement.",
  },
  {
    num: "02",
    title: "Parfait Sur Smartphone",
    description: "Plus de 70% de vos clients cherchent sur mobile. Votre site est construit pour cette réalité : rapide, lisible, et intuitif sur téléphone.",
  },
  {
    num: "03",
    title: "Zéro Template Générique",
    description: "Aucun Wordpress, aucun Wix. Du code propre et sur-mesure qui garantit un design unique, des performances inégalées et une sécurité totale.",
  },
  {
    num: "04",
    title: "Un Accompagnement Réel",
    description: "Je suis disponible pour les modifications, la maintenance et les évolutions de votre site. Vous n'êtes jamais seul face à la technique.",
  },
];

const Benefits = () => {
  return (
    <section id="avantages" style={{ backgroundColor: 'var(--bg-main)', padding: 'clamp(6rem, 16vw, 12rem) 0' }}>
      <div className="container max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ marginBottom: 'clamp(5rem, 12vw, 9rem)' }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--accent-base)', textTransform: 'uppercase', display: 'block', marginBottom: '2rem' }}>
            Mon approche
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, color: 'var(--text-main)', letterSpacing: '-0.03em', maxWidth: 700 }}>
            Pourquoi collaborer <br />
            <span style={{ color: 'var(--accent-base)' }}>avec moi ?</span>
          </h2>
        </motion.div>

        {/* Benefits List */}
        <div>
          {BENEFITS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr 1fr',
                gap: '2rem 4rem',
                padding: 'clamp(2.5rem, 5vw, 4rem) 0',
                borderTop: '1px solid var(--border-subtle)',
                transition: 'padding-left 0.4s',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.paddingLeft = '0.75rem'}
              onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}
              className="benefit-row"
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent-base)', opacity: 0.35, paddingTop: '0.25rem' }}>
                {item.num}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--text-main)', lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
          {/* Bottom border of last row */}
          <div style={{ borderBottom: '1px solid var(--border-subtle)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .benefit-row {
            grid-template-columns: 40px 1fr !important;
          }
          .benefit-row > p {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
