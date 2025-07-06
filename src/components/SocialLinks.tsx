
import React from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const SocialLinks = () => {
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
  );
};

export default SocialLinks;
