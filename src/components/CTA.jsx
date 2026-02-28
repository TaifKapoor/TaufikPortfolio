import React from 'react'
import { Mail, Github, Linkedin, MessageCircle, Send } from 'lucide-react'

const CTA = () => {
  return (
    <section className='py-24 px-4 relative overflow-hidden'>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-30 animate-pulse"></div>
          
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border border-slate-700/50 rounded-[3rem] p-12 md:p-16 text-center">
            {/* Animated icon */}
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-60 animate-pulse"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-3xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-all duration-300 shadow-2xl">
                  <MessageCircle size={48} className="text-white" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Let's Build Something
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let's collaborate and bring your ideas to life with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold"> cutting-edge technology</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a 
                href="mailto:taufikkapoor382@gmail.com" 
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-3xl hover:shadow-cyan-500/70 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-white">
                  <Mail size={24} />
                  Send Email
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://wa.me/918302290182" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-slate-800/50 backdrop-blur border-2 border-green-500/50 text-green-400 rounded-2xl font-bold text-lg hover:bg-green-500/10 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Send size={24} />
                WhatsApp
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-8 border-t border-slate-700/50">
              <a 
                href="https://github.com/Taifkapoor" 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-cyan-500/50 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30">
                  <Github size={28} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/taufik-kapoor-821335321" 
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-blue-500/50 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
                  <Linkedin size={28} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </a>

              <a 
                href="mailto:taufikkapoor382@gmail.com" 
                className="group"
              >
                <div className="w-16 h-16 bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-purple-500/50 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30">
                  <Mail size={28} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
              </a>
            </div>

            {/* Status indicator */}
            <div className="mt-8 inline-flex items-center gap-3 bg-green-500/20 border border-green-500/50 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-bold text-sm">Currently Available for Projects</span>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          {[
            { icon: '⚡', value: '< 24h', label: 'Response Time' },
            { icon: '💼', value: '15+', label: 'Projects Done' },
            { icon: '⭐', value: '100%', label: 'Satisfaction' }
          ].map((stat, i) => (
            <div 
              key={i}
              className="bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTA