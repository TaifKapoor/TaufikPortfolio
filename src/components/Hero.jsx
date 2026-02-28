import React, { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, Github, Linkedin, Code2, Sparkles } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const titles = ['Full Stack Developer', 'MERN Stack Expert', 'UI/UX Enthusiast', 'Problem Solver']
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden' id="home">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      </div>

      {/* Floating orbs */}
      <div 
        className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
        style={{
          top: '20%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{
          bottom: '20%',
          right: '10%',
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
        }}
      ></div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Main content */}
        <div className="text-center mb-16">
          {/* Animated avatar */}
          <div className="inline-block mb-8 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 animate-pulse transition-opacity"></div>
            <div className="relative w-48 h-48 mx-auto bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-8xl font-black shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white/10">
              <span className="bg-gradient-to-br from-white to-cyan-100 bg-clip-text text-transparent">TK</span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
              <Sparkles size={16} className="inline mr-1" />
              Available
            </div>
          </div>

          {/* Name with glitch effect */}
          <h1 className="text-7xl md:text-9xl font-black mb-4 relative">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-sm opacity-70">
              TAUFIK KAPOOR
            </span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              TAUFIK KAPOOR
            </span>
          </h1>

          {/* Rotating title */}
          <div className="h-16 mb-6 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              {titles[currentTitle]}
            </h2>
          </div>

          {/* Description with typewriter effect */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">scalable web applications</span> with the power of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold">MongoDB</span>,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">Express</span>,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">React</span>, and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold">Node.js</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap mb-16">
            <a 
              href="mailto:taufikkapoor382@gmail.com"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-xl font-bold text-lg shadow-xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/70 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={20} />
                Let's Talk
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="https://github.com/Taifkapoor" 
              target='_blank' 
              rel='noopener noreferrer'
              className="px-8 py-4 border-2 border-cyan-500/50 bg-slate-900/50 backdrop-blur text-cyan-400 rounded-xl font-bold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Github size={20} />
              View Work
            </a>
          </div>

          {/* Tech stack badges */}
          <div className="flex justify-center gap-3 flex-wrap mb-16">
            {['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'TypeScript'].map((tech, i) => (
              <div 
                key={tech}
                className="px-5 py-2 bg-gradient-to-r from-slate-800 to-slate-900 border border-cyan-500/30 rounded-full text-sm font-semibold text-cyan-400 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-110"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Contact cards with glass morphism */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} className='text-white' />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Phone</p>
                <p className="text-white font-bold text-lg">8302290182</p>
              </div>
            </div>
          </div>

          <div className="group bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className='text-white'/>
              </div>
              <div className="overflow-hidden">
                <p className="text-gray-400 text-sm font-medium">Email</p>
                <p className="text-white font-bold text-sm truncate">taufikkapoor382@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="group bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} className='text-white' />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Location</p>
                <p className="text-white font-bold text-lg">Baran, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero