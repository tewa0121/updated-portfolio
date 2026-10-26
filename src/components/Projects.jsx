import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

// Put a link in "demo" to show a Live Demo button. Leave "" to hide it.
const projects = [
  {
    title: "Restaurant Management System",
    description: "System for order management, table reservation, and sales reporting.",
    features: [
      "CRUD API endpoints for each workflow",
      "Frontend state integrated with database queries",
    ],
    tech: ["React.js", "Node.js", "Express", "MySQL", "JavaScript"],
    image: "/assets/restaurant.png",
    github: "https://github.com/tewa0121/Restaurant-Management-System",
    demo: "",
  },
  {
    title: "Hotel Management System (GuestFlow)",
    description: "Platform for hotel room reservations, front desk operations, and billing.",
    features: [
      "Secure guest authentication",
      "Room availability queries",
      "API endpoints validated with Postman",
    ],
    tech: ["React.js", "Node.js", "Express", "MySQL", "JavaScript"],
    image: "/assets/hotel.png",
    github: "https://github.com/tewa0121/hotel-management-system",
    demo: "",
  },
  {
    title: "Smart Agriculture Management System",
    description: "Real-time crop health, soil moisture monitoring, and farm analytics platform.",
    features: [
      "REST endpoints for live data handling",
      "Normalized schemas for sensor and resource records",
      "Responsive metrics display",
    ],
    tech: ["React.js", "Node.js", "Express", "MySQL"],
    image: "/assets/smart.png",
    github: "https://github.com/tewa0121/smart-agriculture-management-system",
    demo: "",
  },
  {
    title: "Personal Expense Tracker",
    description: "Financial tracking web tool for recording and visualizing personal budgets.",
    features: [
      "Real-time responsive interface",
      "Mobile-first design",
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    image: "/assets/expense.png",
    github: "https://github.com/tewa0121/expense-tracker",
    demo: "",
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
          {projects.map((proj) => (
            <div
              key={proj.title}
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

                  <h4 className="text-sm font-bold text-black dark:text-white mb-2">Key Features</h4>
                  <ul className="text-gray-600 dark:text-gray-300 text-sm mb-4 space-y-1 list-disc list-inside">
                    {proj.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-200 text-xs font-semibold rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex flex-wrap gap-3">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  <Code size={16} /> GitHub
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:border-blue-400 font-medium px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;