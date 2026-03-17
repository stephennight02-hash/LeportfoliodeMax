import { motion } from 'framer-motion';

const BENEFITS = [
  {
    num: "01",
    title: "Un Design Utile",
    description: "L'interface est structurée pour guider subtilement vos visiteurs vers la prise de contact. Chaque bouton est placé pour convertir.",
  },
  {
    num: "02",
    title: "Parfait Sur Smartphone",
    description: "Votre site est construit en priorité pour le format mobile : rapide, lisible, et intuitif pour plus de 70% de vos visiteurs.",
  },
  {
    num: "03",
    title: "Code Sans Faille",
    description: "Aucun template lourd. Du code sur-mesure qui garantit une vitesse d'affichage ultra-rapide et un excellent référencement Google.",
  },
  {
    num: "04",
    title: "Suivi & Accompagnement",
    description: "Je gère la technique, vous gérez votre métier. Je suis disponible pour la maintenance et les évolutions futures de votre plateforme.",
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
          style={{ marginBottom: 'clamp(4rem, 10vw, 6rem)', textAlign: 'center' }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', color: 'var(--accent-base)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Méthodologie
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--text-main)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Pourquoi travailler ensemble ?
          </h2>
        </motion.div>

        {/* Mobile-friendly Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
        }}>
          {BENEFITS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                backgroundColor: 'var(--bg-surface)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{
                width: 44, height: 44,
                borderRadius: 12,
                backgroundColor: 'var(--accent-indigo-light)',
                color: 'var(--accent-base)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem',
                marginBottom: '1.5rem',
              }}>
                {item.num}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
