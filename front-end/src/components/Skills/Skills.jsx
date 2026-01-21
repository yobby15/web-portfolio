import Title from './Title';
import ContentCard from './ContentCard';

function Skills() {
  const Languages = ['JavaScript', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'Dart'];
  const FrameworksLibraries = ['React', 'Node.js', 'Express', 'Hapi', 'React Native', 'Tailwind CSS', 'Flutter'];
  const Databases = ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Redis'];
  const Tools = ['Git', 'GitHub', 'Linux', 'Postman', 'Figma', 'Visual Studio Code', 'Vite'];

  const getIconUrl = (name) => {
    const mapping = {
      'C++': 'cplusplus/cplusplus-original.svg',
      'Node.js': 'nodejs/nodejs-original.svg',
      'Express': 'express/express-original.svg',
      'Hapi': 'hapi/hapi-original.svg',
      'Tailwind CSS': 'tailwindcss/tailwindcss-original.svg',
      'Visual Studio Code': 'vscode/vscode-original.svg',
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

  return (
    <div className="min-h-screen p-6 skills-theme">
      <Title />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContentCard title="Languages" items={Languages} getIcon={getIconUrl} />

        <ContentCard title="Frameworks & Libraries" items={FrameworksLibraries} getIcon={getIconUrl} />

        <ContentCard title="Databases" items={Databases} getIcon={getIconUrl} />

        <ContentCard title="Tools" items={Tools} getIcon={getIconUrl} />
      </div>
    </div>
  );
}

export default Skills;