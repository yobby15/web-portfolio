import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

function Hero() {
  return (
    <section
      style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
      className="flex flex-col justify-center items-center text-center px-6"
    >
      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '15%', left: '8%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute', bottom: '20%', right: '8%',
          width: '420px', height: '420px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }}
      />

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, var(--text-muted) 1px, transparent 1px)',
        backgroundSize: '36px 36px', opacity: 0.3,
      }} />

      {/* Spinning ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', top: '12%', right: '12%',
          width: '180px', height: '180px', borderRadius: '50%',
          border: '1px dashed var(--border-accent)', opacity: 0.4, pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute', bottom: '14%', left: '10%',
          width: '120px', height: '120px', borderRadius: '50%',
          border: '1px dashed rgba(6,182,212,0.3)', opacity: 0.35, pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>

        {/* Status badge */}
        <motion.div {...fadeUp(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }}
          />
          <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
            Open to opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          letterSpacing: '-0.03em', lineHeight: 1.1,
          marginBottom: '0.5rem', minHeight: '1.2em',
          background: 'var(--gradient-accent)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          <Typewriter
            words={['Hello!', 'Halo!', 'Bonjour!', 'こんにちは!', '안녕하세요!', '你好!']}
            loop={0} cursor cursorStyle="|"
            typeSpeed={90} deleteSpeed={50} delaySpeed={2000}
          />
        </motion.h1>

        {/* Name */}
        <motion.h2 {...fadeUp(0.2)} style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          letterSpacing: '-0.03em', lineHeight: 1.1,
          color: 'var(--text-primary)', marginBottom: '1rem',
        }}>
          I'm Yobby Novialdi
        </motion.h2>

        {/* Role */}
        <motion.p {...fadeUp(0.3)} className="mono" style={{
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          color: 'var(--text-secondary)', marginBottom: '2rem', letterSpacing: '0.05em',
        }}>
          Full-Stack Developer · AI Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p {...fadeUp(0.4)} style={{
          fontSize: '1.05rem', color: 'var(--text-secondary)',
          lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 2.5rem',
        }}>
          Building intelligent systems at the intersection of{' '}
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Web Development</span> and{' '}
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Artificial Intelligence</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Link to="Projects" smooth duration={600} offset={-70}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'var(--gradient-accent)', color: 'white',
                padding: '0.75rem 2rem', borderRadius: '9999px',
                fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer',
                border: 'none', fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              View Projects
            </motion.button>
          </Link>
          <Link to="Contact" smooth duration={600} offset={-70}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'transparent', color: 'var(--text-primary)',
                padding: '0.75rem 2rem', borderRadius: '9999px',
                fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer',
                border: '1px solid var(--border-accent)',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div {...fadeUp(0.6)} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          {[
            { icon: <Github size={18} />, href: 'https://github.com/yobby15', label: 'GitHub' },
            { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/yobby15', label: 'LinkedIn' },
            { icon: <Mail size={18} />, href: 'mailto:yobby.novialdi15@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label} href={href} target="_blank" rel="noreferrer" title={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '42px', height: '42px', borderRadius: '50%',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <Link to="About" smooth duration={600} offset={-70} style={{ position: 'absolute', bottom: '2rem', cursor: 'pointer' }}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}
        >
          <span className="mono" style={{ fontSize: '0.7rem', letterSpacing: '0.12em' }}>SCROLL</span>
          <ArrowDown size={14} />
        </motion.div>
      </Link>
    </section>
  );
}

export default Hero;
