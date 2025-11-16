import { useState } from 'react';
import { Slide } from 'react-reveal';
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
  Car,
  Search,
  X,
  Filter,
  ChevronDown
} from 'lucide-react';

// Project Images
import AddToChart from '../assets/images/add-to-cart.png';
import AgileImage from '../assets/images/agile-board.png';
import Authentic from '../assets/images/auth.png';
import BookImage from '../assets/images/bookconnect.png';
import ArchaarImage from '../assets/images/archaarimg.jpg';
import CakesImage from '../assets/images/cakesimage.png';
import MemeImage from '../assets/images/brave_screenshot_tembedri.netlify.app.png';
import Webinfo from '../assets/images/brave_screenshot_bogusdracula.netlify.app.png';
import manager from '../assets/images/clientmanager.png';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // projects array with the project details
  const projectCategories = [
    'All', 
    'Book Connect', 
    'AuthenticBoulevard App', 
    'Task-Manager', 
    'Add-To-Chart', 
    'Archaar App', 
    'Cakes App', 
    'Tembe Driving School',
    'Web Info'
  ];
  

  // projects array with the project details
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
      title: 'AuthenticBoulevard eCommerce app',
      description: 'An e-commerce application that allows users to browse products and place orders via WhatsApp. It features user engagement.',
      technologies: ['React', 'Lucide Icons', 'TailwindCSS'],
      category: 'AuthenticBoulevard App',
      githubLink: 'https://github.com/BogusDrac/authenticBoulevardcommerce.git',
      liveLink: 'https://authenticboulevard.netlify.app/',
      image: Authentic,
      features: [
        'Browse Products',
        'Place Order via Whatsapp',
        'User Engagement Metrics',
        'Multi-platform Integration',
        'Responsive Visualizations'
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
      title: 'Tembe Driving School',
      description: 'A Driving school landing page with snippets of k53 learsons and location.',
      technologies: ['React.js', 'TailwindCSS',],
      category: 'Tembe Driving School',
      githubLink: 'https://github.com/BogusDrac/DrivingSchool.git',
      liveLink: 'https://tembedri.netlify.app/',
      image: MemeImage,
      features: [
        'User Engagement Metrics',
        'Mobile & Desktop',
        'Book Online'
      ]
    },
    {
      id: 8,
      title: 'Web Info',
      description: 'Simple customer explanation of websites.',
      technologies: ['React.js', 'TailwindCSS',],
      category: 'Web Info',
      githubLink: 'https://github.com/BogusDrac/DrivingSchool.git',
      liveLink: 'https://bogusdracula.netlify.app/',
      image: Webinfo,
      features: [
        'Theme Change',
        'Mobile & Desktop',
        'Website Info'
      ]
    },
    {
      id: 9,
      title: 'Client Manager App',
      description: 'Simple customer explanation of websites.',
      technologies: ['React.js', 'TailwindCSS',],
      category: 'Meme Generator',
      githubLink: 'https://github.com/BogusDrac/DrivingSchool.git',
      liveLink: 'https://bogusdracula.netlify.app/',
      image: manager,
      features: [
        'Add clients data',
        'save data to local storage'
      ]
    }
  ];


  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    const iconClass = "w-5 h-5";
    switch(category) {
      case 'Book Connect': return <Globe className={iconClass} />;
      case 'AuthenticBoulevard App': return <Smartphone className={iconClass} />;
      case 'Task-Manager': return <Brain className={iconClass} />;
      case 'Add-To-Chart': return <Database className={iconClass} />;
      case 'Cakes App': return <Cookie className={iconClass} />;
      case 'Tembe Driving School': return <Car className={iconClass} />;
      case 'Archaar App': return <Popcorn className={iconClass} />;
      default: return <Code className={iconClass} />;
    }
  };

  const projectCount = filteredProjects.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-red-500">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg">Explore my portfolio of creative solutions</p>
        </div>

        {/* Filter Control Panel */}
        <div className="mb-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 shadow-xl">
            {/* Search and Filter Row */}
            <div className="flex flex-col md:flex-row gap-3 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg pl-10 pr-10 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Filter Dropdown */}
              <div className="relative w-full md:w-auto filter-dropdown">
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex-1 md:flex-none bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between gap-3 hover:bg-slate-900/70 transition-all text-sm"
                  >
                    <span className="flex items-center gap-2 text-gray-300">
                      <Filter className="w-4 h-4" />
                      <span className="font-medium">{activeFilter}</span>
                      <span className="text-xs text-gray-500">({projectCount})</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Reset Filter Button */}
                  {activeFilter !== 'All' && (
                    <button
                      onClick={() => setActiveFilter('All')}
                      className="bg-red-600/20 border border-red-500/30 rounded-lg px-3 py-2.5 hover:bg-red-600/30 transition-all text-sm group"
                      title="Reset filter"
                    >
                      <X className="w-4 h-4 text-red-400 group-hover:text-red-300" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop Blur Overlay - Outside the filter panel */}
        {showFilters && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={() => setShowFilters(false)}
          />
        )}

        {/* Dropdown Menu - Full Screen Overlay - Outside the filter panel */}
        {showFilters && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4 pointer-events-none">
            <div className="bg-slate-900 border border-white/10 rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
              <div className="p-4 border-b border-white/10 bg-slate-800/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Filter className="w-5 h-5 text-red-400" />
                    Filter Projects
                  </h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {projectCategories.map((category) => {
                  const isActive = activeFilter === category;
                  const categoryProjects = category === 'All' 
                    ? projects.length 
                    : projects.filter(p => p.category === category).length;
                  
                  return (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveFilter(category);
                        setShowFilters(false);
                      }}
                      className={`w-full px-5 py-4 flex items-center gap-3 hover:bg-slate-800 transition-all border-b border-white/5 ${
                        isActive ? 'bg-red-600/20 text-red-400' : 'text-gray-300'
                      }`}
                    >
                      <div className={`${isActive ? 'text-red-400' : 'text-gray-400'} transition-colors`}>
                        {getCategoryIcon(category)}
                      </div>
                      <span className="flex-1 text-left text-sm font-medium">{category}</span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        isActive ? 'bg-red-500/20 text-red-400 ring-1 ring-red-500/30' : 'bg-slate-800 text-gray-500'
                      }`}>
                        {categoryProjects}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid with Slide Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <Slide key={project.id} left={i % 2 === 0} right={i % 2 !== 0}>
              <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-500" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-xs font-medium border border-red-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-red-400 mb-2">
                      Key Features:
                    </h3>
                    <ul className="text-gray-400 text-xs space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-800/50 hover:bg-red-600 text-gray-300 hover:text-white rounded-lg px-4 py-2.5 flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 border border-white/10 hover:border-red-500"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white rounded-lg px-4 py-2.5 flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 shadow-lg shadow-red-500/30"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-12 max-w-md mx-auto">
              <Code className="mx-auto mb-4 text-red-500" size={64} />
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-400 mb-6">
                {searchTerm ? `No results for "${searchTerm}"` : `No projects in ${activeFilter} category`}
              </p>
              <button
                onClick={() => {
                  setActiveFilter('All');
                  setSearchTerm('');
                }}
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white rounded-lg px-6 py-3 font-medium transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;