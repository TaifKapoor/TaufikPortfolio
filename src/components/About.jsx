import React from 'react'
import { Target, Code, Database, Palette } from 'lucide-react'

const About = () => {
  return (
    <section className='py-24 px-4 relative overflow-hidden' id="objective">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto rotate-6 hover:rotate-12 transition-transform duration-300 shadow-xl shadow-cyan-500/50">
              <Target size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Objective
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="group relative">
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 shadow-2xl">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Full Stack Developer passionate about building{' '}
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                end-to-end web solutions
              </span>{' '}
              using the MERN stack. Specialized in crafting{' '}
              <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                responsive interfaces
              </span>{' '}
              and{' '}
              <span className="font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                scalable backend systems
              </span>.
            </p>

            {/* Skills grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-slate-800/50 backdrop-blur border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-2">
                <Code size={32} className="text-cyan-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Frontend Master</h3>
                <p className="text-sm text-gray-400">React, Next.js, Tailwind CSS, TypeScript</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-2">
                <Database size={32} className="text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Backend Expert</h3>
                <p className="text-sm text-gray-400">Node.js, Express.js, MongoDB, REST APIs</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur border border-pink-500/30 rounded-2xl p-6 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-2">
                <Palette size={32} className="text-pink-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Design Skills</h3>
                <p className="text-sm text-gray-400">Photoshop, Illustrator, UI/UX Design</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-sm text-gray-400 font-semibold">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-sm text-gray-400 font-semibold">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">0</div>
                <div className="text-sm text-gray-400 font-semibold">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg font-medium">
            <span className="text-cyan-400">Solving problems</span> with{' '}
            <span className="text-purple-400">clean code</span> and{' '}
            <span className="text-pink-400">pixel-perfect design</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About