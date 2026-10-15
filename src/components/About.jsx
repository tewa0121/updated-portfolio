import React from 'react';
import { Download, Mail, GraduationCap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
            <div className="flex justify-center md:justify-start">
              <img
                src="/assets/profile.png"
                alt="Tewachew Melaku"
                className="w-32 h-32 rounded-full border-4 border-blue-600 object-cover shadow"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150?text=Tewachew";
                }}
              />
            </div>
            <div className="md:col-span-2 text-center md:text-left space-y-2">
              <h3 className="text-2xl font-bold text-black dark:text-white">Tewachew Melaku</h3>
              <p className="text-blue-600 font-semibold">Full Stack Engineer / Developer</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center justify-center md:justify-start gap-2">
                <GraduationCap size={18} className="text-blue-600" /> 4th-Year Software Engineering Student at Injibara University
              </p>
            </div>
          </div>

          <div className="space-y-6 text-black dark:text-gray-200">
            <div>
              <h4 className="text-lg font-bold flex items-center gap-2 text-black dark:text-white mb-2">
                <Target className="text-blue-600" size={20} /> Professional Goals
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                To build scalable enterprise applications, design high-efficiency database architectures using MySQL and MongoDB, and deliver intuitive web experiences using modern frontend technologies like React.js and Next.js.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/assets/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg shadow transition-colors flex items-center gap-2"
              >
                <Download size={18} /> View CV
              </a>
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg shadow transition-colors flex items-center gap-2"
              >
                <Mail size={18} /> Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;