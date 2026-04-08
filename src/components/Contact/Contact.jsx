import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const contactItems = [
  { label: 'Email', value: 'yobby.novialdi15@gmail.com', link: 'mailto:yobby.novialdi15@gmail.com', icon: Mail, color: '#6366F1' },
  { label: 'WhatsApp', value: '+62 895-6031-54503', link: 'https://wa.me/62895603154503', icon: Phone, color: '#22C55E' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yobby15', link: 'https://linkedin.com/in/yobby15', icon: Linkedin, color: '#0A66C2' },
  { label: 'GitHub', value: 'github.com/yobby15', link: 'https://github.com/yobby15', icon: Github, color: '#94A3B8' },
];

function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="Contact" ref={ref} style={{ backgroundColor: 'var(--bg-secondary)', minHeight: '100vh', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '1rem', fontWeight: 600 }}>GET IN TOUCH</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em',
            color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Let's <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Connect</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div className="accent-divider" />
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
            I'm open to internships, collaborations, and exciting projects. Feel free to reach out — I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1rem' }}>
          {contactItems.map(({ label, value, link, icon: Icon, color }, i) => (
            <motion.a
              key={label}
              href={link} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, x: 4 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '16px', padding: '1.5rem',
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                textDecoration: 'none', color: 'var(--text-primary)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Color accent left border on hover handled by framer */}
              <motion.div
                style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
                  background: color, borderRadius: '16px 0 0 16px', scaleY: 0,
                  transformOrigin: 'center',
                }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.2 }}
              />

              <div style={{
                width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
                background: `${color}18`, border: `1px solid ${color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', color,
              }}>
                <Icon size={22} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '2px' }}>
                  {label.toUpperCase()}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {value}
                </div>
              </div>
              <ArrowUpRight size={16} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}
        >
          <p className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', letterSpacing: '0.06em' }}>
            Crafted with ♥ by Yobby Novialdi — Informatics Engineering @ UNESA
          </p>
          <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.5rem', opacity: 0.5 }}>
            React · Tailwind CSS · Framer Motion · Vite
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
