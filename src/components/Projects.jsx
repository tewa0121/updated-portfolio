import React from 'react';
import { Code } from 'lucide-react';

const projects = [
  {
    title: "Restaurant Management System",
    description: "System for order management, table reservation, and sales reporting.",
    tech: ["React.js", "Node.js", "Express", "MySQL", "JavaScript"],
    image: "/assets/restaurant.png",
    github: "https://github.com/tewa0121/Restaurant-Management-System",
  },
  {
    title: "Hotel Management System (GuestFlow)",
    description: "Platform for hotel room reservations, front desk operations, and billing.",
    tech: ["React.js", "Node.js", "Express", "MySQL", "JavaScript"],
    image: "/assets/hotel.png",
    github: "https://github.com/tewa0121/hotel-management-system",
  },
  {
    title: "Smart Agriculture Management System",
    description: "Real-time crop health, soil moisture monitoring, and farm analytics platform.",
    tech: ["React.js", "Node.js", "Express", "MySQL"],
    image: "/assets/smart.png",
    github: "https://github.com/tewa0121/smart-agriculture-management-system",
  },
  {
    title: "Personal Expense Tracker",
    description: "Modern financial tracking web tool with a real-time responsive UI for recording and visualizing personal budgets.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    image: "/assets/expense.png",
    github: "https://github.com/tewa0121/expense-tracker",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
          Featured <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md flex flex-col justify-between"
            >
              <div>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-52 object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400?text=Project+Preview";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">{proj.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{proj.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-200 text-xs font-semibold rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <Code size={16} /> See Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;