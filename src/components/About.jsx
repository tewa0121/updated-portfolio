import React from 'react';
import { CheckCircle2, Target } from 'lucide-react';

// Edit these lists to match your own goals
const shortTermGoals = [
  'Complete my B.Sc. degree',
  'Gain practical experience through an internship',
  'Build and deploy more real-world full-stack projects',
];

const longTermGoals = [
  'Build scalable enterprise applications',
  'Design high-efficiency database architectures',
  'Deliver intuitive web experiences with modern frontend technologies',
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

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto space-y-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm passionate about engineering reliable enterprise platforms, web software
            solutions, and user-centric web applications.
          </p>

          <div>
            <h4 className="text-lg font-bold flex items-center gap-2 text-black dark:text-white mb-4">
              <Target className="text-blue-600" size={20} /> Career Goals
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GoalList title="Short-Term Goals" goals={shortTermGoals} />
              <GoalList title="Long-Term Goals" goals={longTermGoals} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;