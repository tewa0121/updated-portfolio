import React, { useState } from 'react';

const skillCategories = [
  {
    category: "Frontend",
    skills: ["Next.js", "React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Responsiveness"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "REST API", "Express", "PHP"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "DevOps",
    skills: ["Git & GitHub", "Vercel"]
  },
  {
    category: "Tools & Design",
    skills: ["VS Code", "Postman", "Figma"]
  }
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  // Toggle showing 2 categories vs all 5
  const visibleCategories = showAll ? skillCategories : skillCategories.slice(0, 2);

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
          Technical <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {visibleCategories.map((cat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-200 text-sm font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            {showAll ? "Show Fewer Skills" : "Show All Skills"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;