
import React from 'react';
import { Code, Brain, Globe, Database } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Programming',
      icon: Code,
      items: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Frontend',
      icon: Globe,
      items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'AI/ML',
      icon: Brain,
      items: ['Deep Learning', 'Neural Networks', 'Transfer Learning'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      category: 'Tools',
      icon: Database,
      items: ['Firebase', 'GitHub', 'OpenCV', 'Prompt Engineering'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get to know more about my background, education, and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Info */}
          <div className="space-y-8">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Profile Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-slate-700 dark:text-slate-300">
                    <span className="font-semibold">Education:</span> B.Tech in CSE, BIET, 2025
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Passionate about building scalable, intelligent, and user-friendly digital experiences 
                    that make a meaningful impact in people's lives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-xl font-bold mb-4">Current Focus</h4>
              <p className="leading-relaxed">
                Currently exploring advanced AI/ML techniques and modern web technologies 
                to create innovative solutions that bridge the gap between artificial intelligence 
                and user experience.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '92%', label: 'ML Model Accuracy' },
            { number: '3+', label: 'Years Learning' },
            { number: '89%', label: 'Detection Accuracy' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
