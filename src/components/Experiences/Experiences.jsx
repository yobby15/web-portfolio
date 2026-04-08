import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experienceData } from './ExperienceData';
import { MapPin, Calendar } from 'lucide-react';

function Experiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="Experiences" ref={ref} style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '1rem', fontWeight: 600 }}>MY JOURNEY</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em',
            color: 'var(--text-primary)', lineHeight: 1.1, margin: 0,
          }}>
            Work <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Experience</span>
          </h2>
          <div className="accent-divider" style={{ marginTop: '1rem' }} />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute', left: 0, top: '12px', bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent), transparent)',
              transformOrigin: 'top',
            }}
          />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative', paddingBottom: '3rem' }}
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.15, type: 'spring', stiffness: 200 }}
                style={{
                  position: 'absolute', left: '-2.45rem', top: '6px',
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: 'var(--gradient-accent)',
                  boxShadow: '0 0 12px rgba(99,102,241,0.5)',
                }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="card"
                style={{ borderRadius: '20px', padding: '2rem' }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0 0 0.25rem' }}>{exp.role}</h3>
                    <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700, fontSize: '1rem' }}>{exp.company}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', alignItems: 'flex-end' }}>
                    <span className="mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', background: 'rgba(99,102,241,0.1)', border: '1px solid var(--border-accent)', borderRadius: '6px', padding: '0.25rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <Calendar size={11} /> {exp.period}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={11} /> {exp.location}
                    </span>
                  </div>
                </div>

                <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.25rem' }} />

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {exp.description.map((item, di) => (
                    <motion.li
                      key={di}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.15 + di * 0.07 }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}
                    >
                      <div style={{ marginTop: '9px', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, opacity: 0.7 }} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
