import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const categories = [
  { title: 'Languages', icon: '{ }', items: ['JavaScript', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'Dart'] },
  { title: 'Frameworks & Libraries', icon: '⚡', items: ['React', 'Node.js', 'Express', 'Hapi', 'React Native', 'Tailwind CSS', 'Flutter'] },
  { title: 'Databases', icon: '🗄', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis'] },
  { title: 'Tools', icon: '🔧', items: ['Git', 'GitHub', 'Linux', 'Postman', 'Figma', 'VS Code', 'Vite'] },
];

const getIconUrl = (name) => {
  const mapping = {
    'C++': 'cplusplus/cplusplus-original.svg',
    'Node.js': 'nodejs/nodejs-original.svg',
    'Express': 'express/express-original.svg',
    'Hapi': 'hapi/hapi-original.svg',
    'Tailwind CSS': 'tailwindcss/tailwindcss-original.svg',
    'VS Code': 'vscode/vscode-original.svg',
    'React Native': 'react/react-original.svg',
    'JavaScript': 'javascript/javascript-original.svg',
    'PostgreSQL': 'postgresql/postgresql-original.svg',
    'HTML': 'html5/html5-original.svg',
    'CSS': 'css3/css3-original.svg',
    'GitHub': 'github/github-original.svg',
    'Firebase': 'firebase/firebase-plain.svg',
    'MongoDB': 'mongodb/mongodb-original.svg',
  };
  const path = mapping[name] || `${name.toLowerCase()}/${name.toLowerCase()}-original.svg`;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
};

function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="Skills" ref={ref} style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', padding: '8rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: '1rem', fontWeight: 600 }}>WHAT I WORK WITH</div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em',
            color: 'var(--text-primary)', lineHeight: 1.1, margin: 0,
          }}>
            My <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Tech Stack</span>
          </h2>
          <div className="accent-divider" style={{ marginTop: '1rem' }} />
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))', gap: '1.5rem' }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + ci * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="card"
              style={{ borderRadius: '20px', padding: '2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>{cat.icon}</span>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', margin: 0 }}>{cat.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                {cat.items.map((item, ii) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + ci * 0.1 + ii * 0.04 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="skill-badge"
                  >
                    <img
                      src={getIconUrl(item)} alt={item}
                      style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
