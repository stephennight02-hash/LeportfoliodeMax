import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    title: "L'Épicurien",
    role: "Gastronomie & Réservation",
    tag: "tag-terra",
    description: "Une plateforme élégante conçue pour simplifier la réservation en ligne et attirer une clientèle qualifiée pour ce restaurant réputé. Le design met en valeur le savoir-faire culinaire à travers des visuels larges et épurés.",
    link: "https://l-picurien.vercel.app/",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "L'Atelier Pro",
    role: "Automobile Premium",
    tag: "tag-indigo",
    description: "Un site vitrine clair et rassurant pour un garage spécialisé dans les véhicules de prestige, avec un module de contact rapide pour générer des demandes de devis qualifiées.",
    link: "https://le-garage-pro.vercel.app/",
    image: "/garage.png",  // Local image provided by the client
    local: true,
  },
  {
    id: 3,
    title: "Studio Ciseaux",
    role: "Lookbook & Visibilité",
    tag: "tag-sage",
    description: "Un portfolio visuel impactant pour un salon de coiffure, mettant en valeur l'expertise de l'équipe pour rassurer les nouveaux clients. Navigation intuitive et galerie interactive.",
    link: "https://le-coiffeur-pro.vercel.app/",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2015&auto=format&fit=crop"
  }
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: 'clamp(3rem, 8vw, 8rem)',
      }}
      className="project-row"
    >
      {/* Image */}
      <div style={{
        flex: '0 0 58%',
        overflow: 'hidden',
        borderRadius: 24,
        boxShadow: 'var(--shadow-card)',
        transition: 'box-shadow 0.5s var(--ease-slow)',
      }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-hover)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--shadow-card)'}
        className="project-img-wrap"
      >
        <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
          <img 
            src={project.image} 
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s var(--ease-slow)', display: 'block' }}
            className="project-img"
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Text */}
      <div style={{ flex: 1 }}>
        <span className={project.tag} style={{ marginBottom: '1.5rem' }}>{project.role}</span>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          color: 'var(--text-main)',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
          marginTop: '1rem',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.05rem',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          {project.description}
        </p>
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--text-main)',
            borderBottom: '2px solid var(--text-main)',
            paddingBottom: 6,
            transition: 'color 0.3s, border-color 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--accent-terra)';
            e.currentTarget.style.borderColor = 'var(--accent-terra)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-main)';
            e.currentTarget.style.borderColor = 'var(--text-main)';
          }}
        >
          Visiter le site
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projets" style={{ padding: 'clamp(6rem, 14vw, 12rem) 0', backgroundColor: 'var(--bg-main)' }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ marginBottom: 'clamp(5rem, 12vw, 10rem)', textAlign: 'center' }}
      >
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text-main)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          Réalisations <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>sélectionnées.</span>
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(6rem, 14vw, 12rem)' }}>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
    
    <style>{`
      .project-img:hover { transform: scale(1.04); }
      @media (max-width: 768px) {
        .project-row { flex-direction: column !important; }
        .project-img-wrap { flex: none !important; width: 100%; }
      }
    `}</style>
  </section>
);

export default Projects;
