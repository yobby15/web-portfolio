import React from 'react';

function ExperienceCard({ role, company, location, period, description }) {
  return (
    <div className="relative pl-10 pb-16 border-l-2 border-blue-500 last:border-0 last:pb-0">
      <div className="absolute -left-2.25 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-sm" />
      
      <div className="flex flex-col mb-6 gap-3">
        <div>
          <h3 className="text-3xl font-extrabold tracking-tight leading-tight">{role}</h3>
          <p className="text-xl font-bold text-blue-600 mt-1">{company}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-mono font-bold self-start">
            {period}
          </span>
          <p className="text-sm opacity-60 font-medium italic">{location}</p>
        </div>
      </div>

      <ul className="space-y-4">
        {description.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-lg leading-relaxed">
            <span className="mt-2.5 w-2 h-2 bg-blue-400 rounded-full shrink-0" />
            <span className="opacity-90">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;