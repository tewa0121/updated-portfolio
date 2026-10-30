import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

// Add more entries here (newest first). Example fields below.
const timeline = [
  {
    period: '2023 – Present',
    type: 'Education',
    title: 'B.Sc. in Software Engineering (4th Year)',
    org: 'Injibara University',
    description:
      'Focusing on full-stack web engineering, database design, software patterns, and algorithms.',
    Icon: GraduationCap,
  },
  {
    period: '2023 – Present',
    type: 'Practical Work',
    title: 'Full Stack Web Developer',
    org: 'Independent & Academic Projects',
    description:
      'Built five full-stack web applications with React, Tailwind CSS, Node.js, Express and MySQL, covering the user interface, REST APIs and database design.',
    Icon: Briefcase,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
          Experience & <span className="text-blue-600">Education</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-4 md:left-40 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-blue-200 dark:bg-blue-900"></div>

          <div className="space-y-10">
            {timeline.map(({ period, type, title, org, description, Icon }) => (
              <div key={title} className="relative flex flex-col md:flex-row md:items-start gap-3 md:gap-0 pl-12 md:pl-0">
                {/* date pill */}
                <div className="md:w-40 md:pr-6 md:text-right">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-md">
                    {period}
                  </span>
                </div>

                {/* dot on the line */}
                <span className="absolute left-4 md:left-40 top-[7px] w-3 h-3 -translate-x-1/2 rounded-full bg-blue-600 ring-4 ring-gray-50 dark:ring-gray-950"></span>

                {/* card */}
                <div className="md:ml-8 flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow-sm flex gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-lg h-fit">
                    <Icon size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase">{type}</span>
                    <h3 className="text-lg font-bold text-black dark:text-white mt-1">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">{org}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;