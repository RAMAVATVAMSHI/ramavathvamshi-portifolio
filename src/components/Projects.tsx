
import React from 'react';
import { ExternalLink, Github, Clock, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'BIET Transport App',
      description: 'Full-stack application with real-time tracking, authentication, user profiles, and QR code generation for seamless transportation management.',
      techStack: ['React.js', 'Firebase', 'JavaScript', 'CSS'],
      status: 'Completed',
      image: 'from-blue-500 to-cyan-500',
      features: ['Real-time Tracking', 'Authentication', 'QR Generator', 'User Profiles']
    },
    {
      title: 'Smart Weight & Health Prediction',
      description: 'Machine learning model achieving 92% accuracy in predicting health metrics and weight patterns using advanced algorithms.',
      techStack: ['Python', 'Machine Learning', 'Data Analysis', 'Neural Networks'],
      status: 'Completed',
      image: 'from-green-500 to-emerald-500',
      features: ['92% Accuracy', 'Health Metrics', 'Predictive Analysis', 'ML Algorithms']
    },
    {
      title: 'Malware Image Classification',
      description: 'Deep learning-based system for malware detection using advanced image classification techniques and neural networks.',
      techStack: ['Python', 'Deep Learning', 'Computer Vision', 'TensorFlow'],
      status: 'Completed',
      image: 'from-purple-500 to-violet-500',
      features: ['Deep Learning', 'Image Classification', 'Security', 'Neural Networks']
    },
    {
      title: 'Blood Group Detection',
      description: 'Computer vision system using OpenCV and deep learning to detect blood groups with 89% accuracy through image analysis.',
      techStack: ['Python', 'OpenCV', 'Deep Learning', 'Computer Vision'],
      status: 'Completed',
      image: 'from-red-500 to-pink-500',
      features: ['OpenCV', '89% Accuracy', 'Computer Vision', 'Medical Tech']
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore my portfolio of innovative projects spanning web development, AI/ML, and computer vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image/Icon */}
              <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.image} mb-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-80">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                {/* Floating animation elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {project.status === 'Completed' ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Clock className="h-5 w-5 text-orange-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      project.status === 'Completed' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="group-hover:animate-pulse">View All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
