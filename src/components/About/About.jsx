import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Img from '../../assets/images/Yobby Novialdi_TI 23.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const stats = [
  { label: 'Technologies', value: '20+' },
  { label: 'Projects', value: '3+' },
  { label: 'Training Hours', value: '900+' },
];

function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="About" ref={ref} style={{ backgroundColor: 'var(--bg-secondary)', minHeight: '100vh', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}
        className="flex flex-col md:grid">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', inset: '-20px', borderRadius: '24px', border: '1px solid var(--border-accent)', opacity: 0.4 }}
          />
          <div style={{
            position: 'relative', borderRadius: '20px', overflow: 'hidden',
            border: '1px solid var(--border)', boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
            maxWidth: '380px', width: '100%',
          }}>
            <img src={Img} alt="Yobby Novialdi" style={{ width: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(transparent, rgba(0,0,0,0.3))' }} />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              position: 'absolute', bottom: '-16px', right: '10%',
              background: 'var(--bg-card)', border: '1px solid var(--border-accent)',
              borderRadius: '12px', padding: '0.75rem 1.25rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600 }}>
              @ UNESA — Informatics '23
            </span>
          </motion.div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '1rem', fontWeight: 600 }}>ABOUT ME</div>
            <h2 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em',
              color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '1rem',
            }}>
              Building the future,<br/>
              <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>one line at a time.</span>
            </h2>
            <div className="accent-divider" style={{ marginBottom: '2rem' }} />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
            I'm <strong style={{ color: 'var(--text-primary)' }}>Yobby Novialdi</strong>, an Informatics Engineering student at Universitas Negeri Surabaya (UNESA), deeply passionate about the intersection of software and intelligence.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2.5rem' }}>
            My focus lies in <strong style={{ color: 'var(--text-primary)' }}>Full-Stack Development</strong> and <strong style={{ color: 'var(--text-primary)' }}>Artificial Intelligence</strong> — building seamless cross-platform apps that leverage Machine Learning to solve real-world problems and create smarter user experiences.
          </motion.p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {stats.map(({ label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.03 }}
                style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: '14px', padding: '1.25rem 1rem', textAlign: 'center', cursor: 'default',
                }}
              >
                <div style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.75rem',
                  background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>{value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px', fontWeight: 500 }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
