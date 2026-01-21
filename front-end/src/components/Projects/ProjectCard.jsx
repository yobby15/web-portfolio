function ProjectCard({ title, tech, description, imagePath }) {
  return (
    <div className="flex flex-col gap-8 mb-24 lg:flex-row lg:items-start group">
      <div className="flex-1 overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-gray-50 flex justify-center">
        <img 
          src={imagePath} 
          alt={title} 
          className="w-full h-auto max-h-125 object-contain transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      <div className="flex-1">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="font-mono text-sm tracking-widest opacity-60 mb-6 uppercase">
          {tech}
        </p>
        <ul className="space-y-4">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-3 leading-relaxed text-lg">
              <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;