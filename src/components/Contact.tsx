import React, { useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Instagram, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ramavathvamshi2002@gmail.com',
      href: 'mailto:ramavathvamshi2002@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ramavath-vamshi-69b492333',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/RAMAVATVAMSHI',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/RamavathVamshi_',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/ramavathvamshi__',
      color: 'hover:text-pink-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        {info.label}
                      </p>
                      <p className="text-slate-900 dark:text-white font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-100 dark:bg-slate-700 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Ramavath Vamshi. All rights reserved. | Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
