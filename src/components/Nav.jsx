import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const Nav = () => {
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Fixed spelling: scrollToSection
  const scrollToSection = (id) => {
    setMenuOpen(false)
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.warn(`❌ Section with id "${id}" not found`)
    }
  }

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Decorative background circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navbar */}
      <div className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
              ✨ TAUFIK
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['home', 'objective', 'projects', 'skills', 'education'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition ${activeSection === item
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                    }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="mailto:taufikkapoor382@gmail.com"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg transition text-sm"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-blue-400 hover:text-cyan-400 transition"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 bg-slate-950/50 border-t border-slate-700 transition-all duration-300">
              <div className="space-y-2 pt-4">
                {['home', 'objective', 'projects', 'skills', 'education'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize text-gray-300 hover:text-blue-400 p-3 rounded-lg hover:bg-blue-500/10 transition"
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="mailto:taufikkapoor382@gmail.com"
                  className="block w-full text-left px-3 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg transition mt-2"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav
