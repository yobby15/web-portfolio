import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from './ExperienceData';

function Experiences() {
  return (
    <section className="min-h-screen py-10 px-8 skills-theme">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl font-black uppercase mb-4">
            Experience
          </h2>
          <div className="w-24 h-2 bg-blue-600 rounded-full" />
        </div>

        <div className="mt-12 flex flex-col">
          {experienceData.map((exp, index) => (
            <ExperienceCard 
              key={index}
              {...exp}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experiences;