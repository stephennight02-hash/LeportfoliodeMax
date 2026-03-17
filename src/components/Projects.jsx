import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    title: "L'Épicurien",
    role: "Gastronomie & Réservation",
    tag: "tag-blue",
    description: "Une plateforme élégante conçue pour simplifier la réservation en ligne et attirer une clientèle qualifiée. Le design met en valeur le savoir-faire culinaire à travers des visuels larges et épurés.",
    link: "https://l-picurien.vercel.app/",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "L'Atelier Pro",
    role: "Automobile Premium",
    tag: "tag-ocean",
    description: "Un site vitrine clair et rassurant pour un garage spécialisé, avec un module de contact rapide pour générer des demandes de devis qualifiées sur mobile et sur ordinateur.",
    link: "https://le-garage-pro.vercel.app/",
    image: "/garage.png",
  },
  {
    id: 3,
    title: "Studio Ciseaux",
    role: "Lookbook & Visibilité",
    tag: "tag-indigo",
    description: "Un portfolio visuel impactant pour un salon de coiffure, mettant en valeur l'expertise de l'équipe pour rassurer les nouveaux clients. Une navigation intuitive qui guide vers la prise de rendez-vous.",
    link: "https://le-coiffeur-pro.vercel.app/",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2015&auto=format&fit=crop"
  }
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: 'clamp(2.5rem, 6vw, 6rem)',
      }}
      className={`project-row ${isEven ? 'even-row' : 'odd-row'}`}
    >
      {/* Image Block */}
      <div style={{
        flex: '0 0 55%',
        overflow: 'hidden',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)',
        backgroundColor: '#F8FAFC',
        width: '100%',
      }}
        className="project-img-wrap"
      >
        <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
          <img 
            src={project.image} 
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Text Block */}
      <div style={{ flex: 1, padding: '1rem 0' }} className="project-content">
        <span className={project.tag} style={{ marginBottom: '1rem' }}>{project.role}</span>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          color: 'var(--text-main)',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          marginTop: '0.75rem',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}>
          {project.description}
        </p>
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--accent-base)',
            transition: 'opacity 0.2s',
          }}
          className="hover:opacity-80"
        >
          Visiter le site web
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projets" style={{ padding: 'clamp(5rem, 12vw, 8rem) 0', backgroundColor: 'var(--bg-main)' }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: 'clamp(4rem, 8vw, 6rem)', textAlign: 'center' }}
      >
        <span style={{ color: 'var(--accent-base)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
          Portfolio
        </span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--text-main)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Réalisations Récentes
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5rem, 10vw, 8rem)' }}>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
    
    <style>{`
      @media (max-width: 768px) {
        .project-row { flex-direction: column !important; gap: 2rem !important; }
        .project-img-wrap { flex: none !important; width: 100% !important; }
        .project-content { padding: 0 !important; }
      }
    `}</style>
  </section>
);

export default Projects;
