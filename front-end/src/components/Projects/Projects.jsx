import ProjectCard from './ProjectCard';
import { projectData } from './ProjectData';

function Projects() {
  return (
    <div className="about-theme min-h-screen py-6 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-4 uppercase">My Projects</h2>
          <div className="w-24 h-2 bg-current mx-auto rounded-full" />
        </div>

        <div className="flex flex-col">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;