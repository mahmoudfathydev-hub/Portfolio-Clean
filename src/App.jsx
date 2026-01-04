import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Global/Navbar/Navbar'
import Footer from './Components/Global/Footer/Footer'
import Projects from './Pages/Projects/Projects'
import ProjectPage from './Components/Projects/ProjectPage/ProjectPage'
import ScrollToTop from './Components/UI/ScrollToTop/ScrollToTop'
import BackToTop from './Components/UI/BackToTop/BackToTop'
import Contact from './Pages/Contact/Contact'
import Skills from './Pages/Skills/Skills'

export default function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/course/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  )
}
