import React, { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New portfolio message from ${form.name}`,
          from_name: 'Portfolio Website',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-600 outline-none';

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
                <label className="block text-sm font-medium text-black dark:text-gray-200 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-gray-200 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black dark:text-gray-200 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} /> {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-sm text-center">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
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
                  <span>LinkedIn: <a href="https://www.linkedin.com/in/tewachew-melaku-6b5094408" target="_blank" rel="noopener noreferrer" className="hover:underline">Tewachew Melaku</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;