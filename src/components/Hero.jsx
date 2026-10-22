import React, { useState, useEffect } from 'react';
import { Download, Mail, Eye, X } from 'lucide-react';

const techStack = ['Node.js', 'React.js', 'MySQL'];

const Hero = () => {
  const [showCv, setShowCv] = useState(false);

  // Close on Escape and lock page scroll while the CV is open
  useEffect(() => {
    if (!showCv) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setShowCv(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [showCv]);

  return (
    <section id="home" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left: role, name, buttons */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full text-sm md:text-base font-semibold">
              Junior Full Stack Developer
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight">
              Hi, I'm <span className="text-blue-600">Tewachew Melaku</span>
            </h1>

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
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg shadow transition-colors flex items-center gap-2"
              >
                <Mail size={18} /> Get in Touch
              </a>
            </div>
          </div>

          {/* Right: photo (frame stays in place; ring spins, glow pulses, photo breathes) + tech stack */}
          <div className="flex-1 flex flex-col items-center gap-8">
            <div className="photo-glow relative w-64 h-64 md:w-80 md:h-80 rounded-full">
              <div className="photo-ring absolute inset-0 rounded-full"></div>
              <div className="absolute inset-[5px] rounded-full overflow-hidden bg-white dark:bg-gray-900">
                <img
                  src="/assets/profile.jpg"
                  alt="Tewachew Melaku"
                  className="photo-breathe w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300?text=Tewachew+Melaku";
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-white dark:bg-gray-800 border border-blue-600/40 text-black dark:text-gray-200 text-sm font-semibold rounded-full shadow-sm hover:border-blue-600 hover:-translate-y-1 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CV viewer pop-up */}
      {showCv && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowCv(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-black dark:text-white">Tewachew Melaku - CV</h3>
              <div className="flex items-center gap-2">
                <a
                  href="/assets/cv.pdf"
                  download="Tewachew_Melaku_CV.pdf"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Download size={16} /> Download
                </a>
                <button
                  type="button"
                  onClick={() => setShowCv(false)}
                  aria-label="Close CV"
                  className="p-1.5 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <object data="/assets/cv.pdf" type="application/pdf" className="flex-1 w-full">
              {/* Shown when the browser cannot display PDFs (many phones) */}
              <div className="h-full flex flex-col items-center justify-center gap-4 p-6 text-center text-gray-700 dark:text-gray-300">
                <p>Your browser can't show the CV here.</p>
                <a
                  href="/assets/cv.pdf"
                  download="Tewachew_Melaku_CV.pdf"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
                >
                  <Download size={18} /> Download CV
                </a>
              </div>
            </object>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;