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


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <img
          src={logo}
          alt="Loading Logo"
          className="w-56 h-56 animate-pulse rounded-full"
        />
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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
