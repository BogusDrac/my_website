import { motion } from 'framer-motion';
import { Code, Database, Globe, Atom, Smartphone, BugPlay } from 'lucide-react';

const Skills = () => {
  const services = [
    {
      icon: <Code className="text-red-500" size={48} />,
      title: 'Frontend Development',
      description: 'Creating interactive web interfaces using React, and modern JavaScript frameworks.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
      icon: <Atom className="text-red-500" size={48} />,
      title: 'React JS',
      description: 'Building dynamic user interfaces with React.',
      technologies: ['React', 'Redux']
    },
    {
      icon: <Database className="text-red-500" size={48} />,
      title: 'Database Solutions',
      description: 'Designing and managing databases, and creating APIs.',
      technologies: []
    },
    {
      icon: <Smartphone className="text-red-500" size={48} />,
      title: 'TalwindCSS',
      description: 'Styling modern web applications with TailwindCSS.',
      technologies: ['TailwindCSS', 'CSS']
    },
    {
      icon: <BugPlay className="text-red-500" size={48} />,
      title: 'TypeScript',
      description: 'Enhancing JavaScript with type safety using TypeScript.',
      technologies: ['TypeScript', 'JavaScript']
    },
    {
      icon: <Globe className="text-red-500" size={48} />,
      title: 'Web Performance',
      description: 'Optimizing web applications for better performance.',
      technologies: ['Lighthouse', 'Webpack', 'Performance Tuning']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-red-500">Skills</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4">
                {service.title}
              </h2>
              <p className="text-gray-400 text-center mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;