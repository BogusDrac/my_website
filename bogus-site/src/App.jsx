import { 
          BrowserRouter as Router,
          Routes,
          Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { useState, useEffect } from "react";
import logo from "./assets/images/profilepicture.jpg"
import Skills from "./pages/Skills";
import Hero from "./Components/Hero";
import PageNotFound from "./pages/PageNotFound";

import { motion } from "framer-motion";


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    const text = "Welcome to BoGuSsite"

    const letterVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
      transition: {
        delay: i * 0.08, // controls speed of each letter appearing
        duration: 0.6,
        ease: "easeOut",
      }
    }),
    }

    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
        
      {/* Animated Text */}
      <div className="flex text-3xl md:text-5xl font-bold text-red-500 mb-10">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      {/* Animated Logo (appears after text) */}
      <motion.img
        src={logo}
        alt="Loading Logo"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg shadow-red-500/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: text.length * 0.08 + 0.5, // start after text finishes
          duration: 1,
          type: "spring",
          stiffness: 80,
          ease: "easeOut",
        }}
      />

      {/* Progress indicator */}
      <motion.div
        className="mt-12 flex gap-2"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
    </div>
    );
  }
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
