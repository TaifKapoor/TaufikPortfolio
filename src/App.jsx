import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Education from './components/Education'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Education/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App