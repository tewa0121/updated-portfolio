import React from 'react';
import { Home, User, Briefcase, FolderGit2, Code2, PhoneCall, MapPin, Github, Linkedin, Send, ArrowUp } from 'lucide-react';
import useActiveSection from '../hooks/useActiveSection';

const mobileLinks = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'about', label: 'About', Icon: User },
  { id: 'experience', label: 'Experience', Icon: Briefcase },
  { id: 'projects', label: 'Projects', Icon: FolderGit2 },
  { id: 'skills', label: 'Skills', Icon: Code2 },
  { id: 'contact', label: 'Contact', Icon: PhoneCall },
];
const ids = mobileLinks.map((l) => l.id);

const socials = [
  { label: 'GitHub', href: 'https://github.com/tewa0121', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tewachew-melaku-6b5094408', Icon: Linkedin },
  { label: 'Telegram', href: 'https://t.me/tewa0121', Icon: Send },
];

const Footer = () => {
  const active = useActiveSection(ids);

  return (
    <>
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mb-16 md:mb-0 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm space-y-3">
          <div className="flex justify-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="flex items-center justify-center gap-2">
            <MapPin size={16} className="text-blue-600" />
            Injibara, Ethiopia
          </p>
          <p>© {new Date().getFullYear()} Tewachew Melaku. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium">
            <ArrowUp size={14} /> Back to top
          </a>
        </div>
      </footer>

      {/* Sticky mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50 px-1 py-2 flex justify-around items-center text-[10px] font-medium">
        {mobileLinks.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? 'true' : undefined}
            className={`flex flex-col items-center gap-0.5 px-1 ${
              active === id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <Icon size={18} /> {label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Footer;
