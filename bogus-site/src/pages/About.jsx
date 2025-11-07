import { motion } from 'framer-motion';
import { Award, Code, Book, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    'React-Native', 'Node.js', 'TypeScript', 'Python', 'Git', 'PyGames', 'Bash'
  ];

  const experiences = [
    {
      title: 'Junior Developer',
      company: 'Self-Employed',
      period: '2021 - Present',
      description: 'Developing and maintaining personal projects, focusing on web development and modern JavaScript frameworks.'
    },
    {
      title: 'Software Development Student',
      company: 'CodeSpace Academy',
      period: '2024',
      description: 'Completed and Graduated Software Development Course.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 select-none">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-red-500">Me</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Info */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Award className="mr-3 text-red-500" /> Personal Journey
            </h2>
            <p className="text-gray-400">
              Passionate software Developer with a love for solving complex problems and creating innovative solutions. 
              With over 3 years of experience in web development, I'm committed to continuous learning 
              and pushing the boundaries of technology.
            </p>
          </motion.div>
          
          {/* Skills */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Code className="mr-3 text-red-500" /> Other Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Experience */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-6 rounded-lg mt-8"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Briefcase className="mr-3 text-red-500" /> Experience
          </h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4 pb-4 border-b border-gray-700 last:border-b-0">
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-gray-400">{exp.company} | {exp.period}</p>
              <p className="text-gray-500 mt-2">{exp.description}</p>
            </div>
          ))}
        </motion.div>
        
        {/* Education */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-6 rounded-lg mt-8"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Book className="mr-3 text-red-500" /> Education
          </h2>
          <div>
            <h3 className="text-xl font-semibold text-white">
              Software Development
            </h3>
            <p className="text-gray-400">
              CodeSpace Academy | Graduated 2024
            </p>
            <p className="text-gray-500 mt-2">
              Specialized in Web Development
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;