import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ghost, ArrowLeft } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center select-none px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-6 bg-gray-800 rounded-full shadow-lg shadow-red-500/30"
          >
            <Ghost className="text-red-500 w-16 h-16" />
          </motion.div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-red-500 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          Oops... looks like the page you're looking for has vanished into the
          void. Don’t worry — even ghosts get lost sometimes.
        </p>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-all"
          >
            <ArrowLeft size={20} />
            Go Back Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
