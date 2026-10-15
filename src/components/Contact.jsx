import React, { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! Topic: ${topic}`);
    setTopic('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
          Contact <span className="text-blue-600">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Send Message Form */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-black dark:text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black dark:text-gray-200 mb-1">Topic</label>
                <input
                  type="text"
                  required
                  placeholder="Enter topic..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-gray-200 mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-600 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* Find Me Online Info */}
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-6">Find Me Online</h3>
              <div className="space-y-4 text-black dark:text-gray-200 font-medium">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span>Email: <a href="mailto:tewachewmelaku6@gmail.com" className="hover:underline">tewachewmelaku6@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <span>Phone: <a href="tel:+251920954224" className="hover:underline">+251920954224</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Send className="text-blue-600" size={20} />
                  <span>Telegram: <a href="https://t.me/tewa0121" target="_blank" rel="noopener noreferrer" className="hover:underline">@tewa0121</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-blue-600" size={20} />
                  <span>GitHub: <a href="https://github.com/tewa0121" target="_blank" rel="noopener noreferrer" className="hover:underline">tewa0121</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-blue-600" size={20} />
                  <span>LinkedIn: <a href="https://www.linkedin.com/in/tewachew-melaku-6b5094408?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:underline">Tewachew Melaku</a></span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;