import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
          Experience & <span className="text-blue-600">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Education */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm flex gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-lg h-fit">
              <GraduationCap size={24} />
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase">Education</span>
              <h3 className="text-xl font-bold text-black dark:text-white mt-1">
                4th-Year Software Engineering Student
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Injibara University</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">
                Focusing on full-stack web engineering, database architecture (MySQL, MongoDB), software patterns, and algorithms.
              </p>
            </div>
          </div>

          {/* Practical Experience */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm flex gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-lg h-fit">
              <Briefcase size={24} />
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase">Practical Work</span>
              <h3 className="text-xl font-bold text-black dark:text-white mt-1">
                Full Stack Web Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Independent & Academic Projects</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">
                Designed and deployed full-stack web management systems using React, Next.js, Node.js, Express, MySQL, and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;