import React from 'react';
import { Sun, Moon, Download } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-black dark:text-white">
              Tewachew<span className="text-blue-600"> Melaku</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 text-black dark:text-gray-200">
              <a href="#home" className="hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-600 font-medium transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-600 font-medium transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-600 font-medium transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-600 font-medium transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-yellow-400 hover:ring-2 ring-blue-500 transition-all"
              title="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="/assets/cv.pdf"
              download="Tewachew_Melaku_CV.pdf"
              title="Download CV"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-white font-medium px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Download size={18} />
              <span className="hidden sm:inline">Download CV</span>
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;