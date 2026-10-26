import React from 'react';
import { GraduationCap, CheckCircle2, BookOpen, Users, Puzzle, Lightbulb, Target } from 'lucide-react';

// Edit these lists to match your own goals and traits
const traits = [
  { label: 'Passionate Learner', Icon: BookOpen },
  { label: 'Team Player', Icon: Users },
  { label: 'Problem Solver', Icon: Puzzle },
  { label: 'Innovator', Icon: Lightbulb },
];

const shortTermGoals = [
  'Complete my B.Sc. in Software Engineering at Injibara University',
  'Gain practical experience through an internship',
  'Build and deploy more real-world full-stack projects',
];

const longTermGoals = [
  'Build scalable enterprise applications',
  'Design high-efficiency database architectures with MySQL and MongoDB',
  'Deliver intuitive web experiences with React.js and Next.js',
];

const GoalList = ({ title, goals }) => (
  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5">
    <h5 className="font-bold text-black dark:text-white mb-3">{title}</h5>
    <ul className="space-y-2">
      {goals.map((goal) => (
        <li key={goal} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
          <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
          <span>{goal}</span>
        </li>
      ))}
    </ul>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          {/* Name, role, university (no photo) */}
          <div className="text-center space-y-2 border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
            <h3 className="text-2xl font-bold text-black dark:text-white">Tewachew Melaku</h3>
            <p className="text-blue-600 font-semibold">Junior Full Stack Developer</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center justify-center gap-2">
              <GraduationCap size={18} className="text-blue-600" /> 4th-Year Software Engineering Student at Injibara University
            </p>
          </div>

          <div className="space-y-8 text-black dark:text-gray-200">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              I'm a 4th-year Software Engineering student at Injibara University, passionate about
              engineering reliable enterprise platforms, web software solutions, and user-centric
              web applications.
            </p>

            {/* Career goals */}
            <div>
              <h4 className="text-lg font-bold flex items-center gap-2 text-black dark:text-white mb-4">
                <Target className="text-blue-600" size={20} /> Career Goals
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GoalList title="Short-Term Goals" goals={shortTermGoals} />
                <GoalList title="Long-Term Goals" goals={longTermGoals} />
              </div>
            </div>

            {/* Traits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              {traits.map(({ label, Icon }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-full">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;