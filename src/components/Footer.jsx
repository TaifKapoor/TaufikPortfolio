import React from 'react'
import { Heart, Code2, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='relative border-t border-slate-800/50 bg-slate-950'>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Code2 className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  TAUFIK KAPOOR
                </h3>
                <p className="text-xs text-cyan-400 font-semibold">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative web solutions with modern technologies and clean code.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Skills', 'Education'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:taufikkapoor382@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Mail size={16} className="text-cyan-400" />
                  taufikkapoor382@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="text-cyan-400">📍</span>
                Baran, Rajasthan, India
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://github.com/Taifkapoor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
              >
                <Github size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/taufik-kapoor-821335321"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
              >
                <Linkedin size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span>&copy; {currentYear} Taufik Kapoor.</span>
              <span className="hidden md:inline">All rights reserved.</span>
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> and <Code2 size={16} className="text-cyan-400" /> by Taufik
            </p>
          </div>
        </div>

        {/* Version info */}
        <div className="mt-6 text-center">
          <span className="inline-block bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-1.5 text-xs text-gray-500">
            v2.0.0 • Portfolio 2025
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer