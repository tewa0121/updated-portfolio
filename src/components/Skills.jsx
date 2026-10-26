import React, { useState } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaFigma,
  FaMobileAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiPostman,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { Lightbulb, Users, MessageCircle, Clock } from 'lucide-react';

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", Icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "React.js", Icon: FaReact, color: "text-[#61DAFB]" },
      { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-500" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "HTML", Icon: FaHtml5, color: "text-[#E34F26]" },
      { name: "CSS", Icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "Responsiveness", Icon: FaMobileAlt, color: "text-blue-600" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", Icon: FaNodeJs, color: "text-[#339933]" },
      { name: "REST API", Icon: TbApi, color: "text-blue-600" },
      { name: "Express", Icon: SiExpress, color: "text-black dark:text-white" },
      { name: "PHP", Icon: FaPhp, color: "text-[#777BB4]" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
      { name: "MySQL", Icon: SiMysql, color: "text-[#4479A1]" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Git & GitHub", Icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "Vercel", Icon: SiVercel, color: "text-black dark:text-white" },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      { name: "VS Code", Icon: VscVscode, color: "text-[#007ACC]" },
      { name: "Postman", Icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "Figma", Icon: FaFigma, color: "text-[#F24E1E]" },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Problem Solving", Icon: Lightbulb, color: "text-yellow-500" },
      { name: "Teamwork", Icon: Users, color: "text-blue-600" },
      { name: "Communication", Icon: MessageCircle, color: "text-green-600" },
      { name: "Time Management", Icon: Clock, color: "text-purple-600" },
    ],
  },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  // Show the first 2 categories, or all 6 when expanded
  const visibleCategories = showAll ? skillCategories : skillCategories.slice(0, 2);

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
          Technical <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {visibleCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-lg font-bold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(({ name, Icon, color }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-200 text-sm font-medium rounded-lg hover:-translate-y-0.5 hover:shadow transition-all duration-200"
                  >
                    <Icon size={18} className={color} />
                    {name}
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