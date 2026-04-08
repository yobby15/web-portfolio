import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projectData } from './ProjectData';

function ProjectItem({ project, index, inView }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: isEven ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
        gap: '4rem', alignItems: 'center', marginBottom: '5rem',
      }}
      className="flex flex-col"
    >
      {/* Image */}
      <motion.div style={{ order: isEven ? 1 : 2 }} className="order-first"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          border: '1px solid var(--border)', boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          background: 'var(--bg-card)',
        }}>
          <div style={{
            padding: '0.75rem 1rem', background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
              <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
            ))}
          </div>
          <img src={project.imagePath} alt={project.title}
            style={{ width: '100%', display: 'block', maxHeight: '340px', objectFit: 'cover' }} />
        </div>
      </motion.div>

      {/* Text */}
      <div style={{ order: isEven ? 2 : 1 }}>
        <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 600 }}>
          PROJECT {String(index + 1).padStart(2, '0')}
        </div>
        <h3 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em',
          color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '1rem',
        }}>{project.title}</h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.tech.split(', ').map((t, ti) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.3 + ti * 0.05 }}
              className="mono"
              style={{
                fontSize: '0.72rem', color: 'var(--accent-2)',
                background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)',
                borderRadius: '6px', padding: '0.25rem 0.625rem', fontWeight: 500,
              }}
            >{t}</motion.span>
          ))}
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {project.description.map((item, di) => (
            <motion.li
              key={di}
              initial={{ opacity: 0, x: isEven ? 20 : -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.4 + di * 0.08 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}
            >
              <div style={{ marginTop: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gradient-accent)', flexShrink: 0 }} />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="Projects" ref={ref} style={{ backgroundColor: 'var(--bg-secondary)', minHeight: '100vh', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '5rem' }}
        >
          <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '1rem', fontWeight: 600 }}>WHAT I'VE BUILT</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em',
            color: 'var(--text-primary)', lineHeight: 1.1, margin: 0,
          }}>
            Featured <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Projects</span>
          </h2>
          <div className="accent-divider" style={{ marginTop: '1rem' }} />
        </motion.div>

        {projectData.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} inView={inView} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
