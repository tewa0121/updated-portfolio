import React from 'react';
import { Home, User, Briefcase, FolderGit2, Code2, PhoneCall, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mb-16 md:mb-0 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm space-y-2">
          <p className="flex items-center justify-center gap-2">
            <MapPin size={16} className="text-blue-600" />
            Injibara, Ethiopia
          </p>
          <p>© {new Date().getFullYear()} Tewachew Melaku. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky Mobile Bottom Navigation Bar with Icons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50 px-2 py-2 flex justify-around items-center text-xs font-medium text-black dark:text-gray-300">
        <a href="#home" className="flex flex-col items-center hover:text-blue-600">
          <Home size={18} /> Home
        </a>
        <a href="#about" className="flex flex-col items-center hover:text-blue-600">
          <User size={18} /> About
        </a>
        <a href="#experience" className="flex flex-col items-center hover:text-blue-600">
          <Briefcase size={18} /> Exp
        </a>
        <a href="#projects" className="flex flex-col items-center hover:text-blue-600">
          <FolderGit2 size={18} /> Projects
        </a>
        <a href="#skills" className="flex flex-col items-center hover:text-blue-600">
          <Code2 size={18} /> Skills
        </a>
        <a href="#contact" className="flex flex-col items-center hover:text-blue-600">
          <PhoneCall size={18} /> Contact
        </a>
      </div>
    </>
  );
};

export default Footer;