import { motion } from 'framer-motion';

const BENEFITS = [
  {
    num: "01",
    title: "Un Design Utile",
    description: "L'interface est structurée pour guider subtilement vos visiteurs vers la prise de contact. Chaque bouton est placé pour convertir de façon optimale.",
  },
  {
    num: "02",
    title: "Parfait Sur Smartphone",
    description: "Votre site est construit en priorité pour le format mobile : ultra rapide, lisible, et intuitif pour plus de 70% de vos visiteurs quotidiens.",
  },
  {
    num: "03",
    title: "Code Sans Faille",
    description: "Aucun template lourd. Du code sur-mesure qui garantit une vitesse d'affichage instantanée et un excellent positionnement sur Google.",
  },
  {
    num: "04",
    title: "Suivi & Accompagnement",
    description: "Je gère la technique à 100%, vous gérez votre métier en toute sérénité. Je reste disponible pour la maintenance et les évolutions futures.",
  },
];

const Benefits = () => {
  return (
    <section id="avantages" style={{ backgroundColor: 'var(--bg-alt)', padding: 'clamp(5rem, 12vw, 8rem) 0' }}>
      <div className="container max-w-5xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 'clamp(4rem, 10vw, 6rem)' }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', color: 'var(--accent-base)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            Méthodologie
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--text-main)', lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: 700 }}>
            Pourquoi travailler <span style={{ color: 'var(--accent-base)' }}>ensemble ?</span>
          </h2>
        </motion.div>

        {/* Linear Bar Layout (instead of Grid) */}
        <div>
          {BENEFITS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                gap: '1rem',
                padding: 'clamp(2.5rem, 5vw, 3.5rem) 0',
                borderTop: '1px solid var(--border-dark)',
                cursor: 'default',
              }}
              className="benefit-row md:flex-row md:items-center md:gap-16"
            >
              {/* Number Badge */}
              <div style={{
                width: 44, height: 44,
                borderRadius: 12,
                backgroundColor: 'var(--accent-indigo-light)',
                color: 'var(--accent-base)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem',
                flexShrink: 0,
              }}>
                {item.num}
              </div>
              
              {/* Title */}
              <div style={{ flex: '0 0 300px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--text-main)', margin: 0 }}>
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Bottom border for the last item */}
          <div style={{ borderBottom: '1px solid var(--border-dark)' }} />
        </div>
      </div>

      <style>{`
        .benefit-row:hover {
          background-color: rgba(255, 255, 255, 0.4);
          transform: translateX(8px);
          transition: all 0.3s ease;
        }
        @media (min-width: 768px) {
          .md\\:flex-row { flex-direction: row !important; }
          .md\\:items-center { align-items: center !important; }
          .md\\:gap-16 { gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Benefits;
