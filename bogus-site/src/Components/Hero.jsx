import { motion } from 'framer-motion';
import { Download, Wand, Network, Dna } from 'lucide-react';

const Hero = () => {

  // styling for card 
  const cardStyle = "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center p-4 select-none">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
          Hi, I'm <span className="text-red-500">Itumeleng Matlala</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
          Web Developer | Problem Solver | Tech Enthusiast | Gamer
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a 
            href="https://docs.google.com/document/d/1cTJhHiDh06NcAgtvqq8De12ALWyx4Xm_Z0sYmF3Qlak/edit?usp=sharing" 
            download 
            className={cardStyle}
            aria-label="Download CV"
          >
            <Download />
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <Dna className="mx-auto mb-4 text-red-500" size={48} />
            <h2 className="text-xl font-semibold mb-2">Web Development</h2>
            <p className="text-gray-400">
              Creating efficient web applications using modern technologies.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <Network className="mx-auto mb-4 text-red-500" size={48} />
            <h2 className="text-xl font-semibold mb-2">Responsive Development</h2>
            <p className="text-gray-400">
              Developing cross-platform mobile applications,  responsive web applications.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <Wand className="mx-auto mb-4 text-red-500" size={48} />
            <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
            <p className="text-gray-400">
              Crafting intuitive and beautiful user interfaces and experiences.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
