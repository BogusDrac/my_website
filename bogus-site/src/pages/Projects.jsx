import  { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Brain, 
  Popcorn,
  Cookie,
  Rat
} from 'lucide-react';

// Project Images (you'll need to import or create these)
import AddToChart from '../assets/images/add-to-cart.png';
import AgileImage from '../assets/images/agile-board.png';
import CertificateImage from '../assets/images/Screenshot 2024-12-13 150451.png';
import BookImage from '../assets/images/bookconnect.png';
import ArchaarImage from '../assets/images/archaarimg.jpg';
import CakesImage from '../assets/images/cakesimage.png';
import MemeImage from '../assets/images/troll-face.png';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All'); // Set the initial filter to 'All'
  
  // Define the projects array with the project details
  const projectCategories = ['All', 'Book Connect', 'Certificate Generater', 'Task-Manager', 'Add-To-Chart', 'Archaar App', 'Cakes App', 'Meme Generator'];
  

  // Define the projects array with the project details
  const projects = [
    {
      id: 1,
      title: 'Add-to-chart app',
      description: 'Simple add to chart app with advanced features to store the data on firebase and items can be deleted when clicked.',
      technologies: ['HTMl', 'CSS', 'JavacSript', 'FireBase'],
      category: 'Add-To-Chart',
      githubLink: 'https://github.com/BogusDrac/Module_10R_CS20240147_WFO2407_Group-D_Itumeleng-Matlala_SDF10_R.git',
      liveLink: 'https://bright-profiterole-7eb504.netlify.app/',
      image: AddToChart,
      features: [
        'Shopping Cart',
        'Add Items for shopping'
      ]
    },
    {
      id: 2,
      title: 'Agile Board',
      description: 'An interactive task management tool that allows users to create, update, and delete tasks. The Agile Board is designed to enhance productivity by providing a visual representation of tasks and their statuses.',
      technologies: ['Vanilla JavaScript', 'CSS', 'HTML'],
      category: 'Task-Manager',
      githubLink: 'https://github.com/BogusDrac/JSL_Portfolio_Piece_CS20240147_WFO2407_Group-D_Itumeleng-Matlala_JSL11.git',
      liveLink: 'https://agile-task-board.netlify.app/  ',
      image: AgileImage,
      features: [
        'Task Manager',
        'To-do fuctionality',
      ]
    },
    {
      id: 3,
      title: 'Certificate Generater',
      description: 'A web application that generates personalized certificates for users. It features a responsive design and allows users to input their details to create a custom certificate.',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      category: 'Certificate Generater',
      githubLink: 'https://github.com/BogusDrac/Module_7_CS20240147_WFO2407_Group-D_Itumeleng-Matlala_JSL07.git',
      liveLink: 'https://certificate-generater.netlify.app/',
      image: CertificateImage,
      features: [
        'Generates personalised certificates',  
        'Responsive Design'
      ]
    },
    {
      id: 4,
      title: 'Book Connect',
      description: 'A platform that allows users to browse and search for books efficiently. It provides user engagement metrics and integrates with multiple platforms for a seamless experience.',
      technologies: ['Html', 'CSS', 'Vanilla JavaScript'],
      category: 'Book Connect',
      githubLink: 'https://github.com/BogusDrac/CS20240147_WFO2407_Group-D_Itumeleng-Matlala_DJS03.git',
      liveLink: 'https://book-connect-app-bogus.netlify.app/',
      image: BookImage,
      features: [
        'Browse Efficiently',
        'Search for books',
        'User Engagement Metrics',
        'Multi-platform Integration',
        'Responsive Visualizations'
      ]
    },
    {
      id: 5,
      title: 'Archaar App',
      description: 'An e-commerce application that allows users to browse products and place orders via WhatsApp. It features user engagement',
      technologies: ['React.js', 'TailwindCSS', 'Lucide-icons', 'WhatsApp'],
      category: 'Archaar App',
      githubLink: 'https://github.com/BogusDrac/artchaar_project.git',
      liveLink: 'https://mamas-archaar.netlify.app/',
      image: ArchaarImage,
      features: [
        'Browse Products',
        'Place Order via Whatsapp',
        'User Engagement Metrics',
        'Multi-platform Integration',
        'Responsive Visualizations'
      ]
    },
    {
      id: 6,
      title: 'Cakes App',
      description: 'A delightful application that allows users to browse a variety of cakes and place orders via WhatsApp. It emphasizes user engagement and offers a responsive design for all devices.',
      technologies: ['React.js', 'TailwindCSS', 'Lucide-icons', 'WhatsApp'],
      category: 'Cakes App',
      githubLink: 'https://github.com/BogusDrac/bakery_project.git',
      liveLink: 'https://mamas-cakes.netlify.app/',
      image: CakesImage,
      features: [
        'Browse Products',
        'Place Order via Whatsapp',
        'User Engagement Metrics',
        'Multi-platform Integration',
        'Responsive Visualizations'
      ]
    },
    {
      id: 7,
      title: 'Meme Generator',
      description: 'A fun application that allows users to create and share memes. It features a user-friendly interface and a variety of templates to choose from, making meme creation easy and enjoyable.',
      technologies: ['React.js', 'CSS', 'Api'],
      category: 'Meme Generator',
      githubLink: 'https://github.com/BogusDrac/DJS07_CS20240147_WFO2407_Group-D_Itumeleng-Matlala.git',
      liveLink: 'https://bogus-meme-generator.netlify.app/',
      image: MemeImage,
      features: [
        'User Engagement Metrics',
        'Mobile use Only'
      ]
    }
  ];


  // Function to render the projects
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);


  // Function to render the projects
  const getCategoryIcon = (category) => {
    const iconClass = "mr-2 w-5 h-5";
    // switch statement to return the icon class based on the category
    switch(category) {
      case 'Book Connect': return <Globe className={iconClass} />;
      case 'Certificate Generater': return <Smartphone className={iconClass} />;
      case 'Task-Manager': return <Brain className={iconClass} />;
      case 'Add-To-Chart': return <Database className={iconClass} />;
      case 'Cakes App': return <Cookie className={iconClass} />;
      case 'Meme Generator': return <Rat className={iconClass} />;
      case 'Archaar App': return <Popcorn className={iconClass} />;
      default: return <Code className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 select-none">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-red-500">Projects</span>
        </h1>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-full flex items-center gap-2 transition-all m-1
                ${activeFilter === category 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }
              `}
            >
              {getCategoryIcon(category)}
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h2>
                
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Features */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-red-500 mb-2">
                    Key Features:
                  </h3>
                  <ul className="text-gray-400 list-disc list-inside text-sm">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Project Links */}
                <div className="flex justify-between mt-auto">
                  <motion.a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-red-500 hover:text-red-600 flex items-center gap-2"
                  >
                    <Github />
                    GitHub
                  </motion.a>
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-red-500 hover:text-red-600 flex items-center gap-2"
                  >
                    <ExternalLink />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* No Projects Found Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            <Code className="mx-auto mb-4 text-red-500" size={48} />
            <p className="text-xl">
              No projects found in the {activeFilter} category.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;