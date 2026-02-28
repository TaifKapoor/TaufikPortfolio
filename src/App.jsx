// App.jsx - Main Entry
import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Project from './components/Project'
import Experience from './components/Experience'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Education from './components/Education'

const App = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Project />
        <Experience />
        <CTA />
        <Education/>
        <Footer />
      </div>
    </div>
  )
}

export default App