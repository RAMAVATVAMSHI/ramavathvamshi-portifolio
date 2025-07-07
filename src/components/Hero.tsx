
import React, { useEffect, useState } from 'react';
import { Download, Eye, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Software Developer',
    'Frontend Developer', 
    'AI & ML Enthusiast'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/ramavath-vamshi-69b492333', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/RAMAVATVAMSHI', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/RamavathVamshi_', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/ramavathvamshi__', label: 'Instagram' },
    { icon: Mail, href: 'mailto:ramavathvamshi2002@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white">
                Ramavath{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Vamshi
                </span>
              </h1>
              <div className="h-16 flex items-center">
                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              I'm a passionate Software Developer and Frontend Developer with a strong interest in 
              Artificial Intelligence, Machine Learning, and Web Development. With hands-on experience 
              in building dynamic interfaces and intelligent systems, I aim to create impactful digital 
              solutions that merge innovation with usability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>View Resume</span>
              </button>
              <button className="group flex items-center space-x-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105">
                <Eye className="h-5 w-5 group-hover:animate-pulse" />
                <span>View Projects</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-slate-700"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/0Nzb0trb/Screenshot-20250305-142647.jpg" 
                    alt="Ramavath Vamshi" 
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-200"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 -right-8 w-5 h-5 bg-purple-400 rounded-full animate-pulse delay-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
