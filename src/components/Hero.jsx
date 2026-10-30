import React, { useState } from 'react';
import { Eye, Mail, Github, Linkedin, Send } from 'lucide-react';
import CvViewer from './CvViewer';

const motto = ['Build', 'Learn', 'Create', 'Grow'];

const socials = [
  { label: 'GitHub', href: 'https://github.com/tewa0121', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tewachew-melaku-6b5094408', Icon: Linkedin },
  { label: 'Telegram', href: 'https://t.me/tewa0121', Icon: Send },
];

const Hero = () => {
  const [showCv, setShowCv] = useState(false);

  return (
    <section id="home" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left: name, role, summary, buttons */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
              Open to internship opportunities
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight">
              Hi, I'm <span className="text-blue-600">Tewachew Melaku</span>
            </h1>

            <div className="space-y-3">
              <p className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                Software Engineering Student (4th Year)
              </p>
              <div>
                <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full text-sm md:text-base font-semibold">
                  Junior Full Stack Developer
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
                I build full-stack web applications with React, Node.js and MySQL, from the interface to the
                database.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4">
              <button
                type="button"
                onClick={() => setShowCv(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg shadow transition-colors flex items-center gap-2"
              >
                <Eye size={18} /> View CV
              </button>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-white font-medium px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2"
              >
                <Mail size={18} /> Get in Touch
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="p-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: photo + motto */}
          <div className="flex-1 flex flex-col items-center gap-8">
            <div className="photo-glow relative w-64 h-64 md:w-80 md:h-80 rounded-full">
              <div className="photo-ring absolute inset-0 rounded-full"></div>
              <div className="absolute inset-[5px] rounded-full overflow-hidden bg-white dark:bg-gray-900">
                <img
                  src="/assets/profile.jpg"
                  alt="Tewachew Melaku"
                  width="436"
                  height="512"
                  className="photo-breathe w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {motto.map((word, i) => (
                <span
                  key={word}
                  className="motto-word px-5 py-1.5 rounded-full text-sm md:text-base font-bold tracking-wider shadow-md"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showCv && <CvViewer onClose={() => setShowCv(false)} />}
    </section>
  );
};

export default Hero;
