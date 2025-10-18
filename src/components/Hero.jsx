import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-4 pt-40 relative overflow-hidden' id="home">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-8 animate-bounce">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 text-white rounded-full flex items-center justify-center text-7xl font-bold shadow-2xl shadow-blue-500/50 animate-bounce">
              TK
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent leading-tight">
            Taufik Kapoor
          </h1>
          <h1 className="text-2xl md:text-3xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Highly motivated developer with expertise in <span className="text-cyan-400 font-bold">
              React, Next.js & JavaScripts
            </span> Building innovative, responsive, and user-friendly web experience
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:taufikkapoor382@gmail.com"
              className='px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg transition text-lg'>Get In Touch</a>
            <a href="https://github.com/Taifkapoor" target='_blank' rel='noopener noreferrer'
              className='px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 transition text-lg hover:text-white'>Get In Touch</a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-20">
          <div className="bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
            <div className="flex items-center gap-3">
              <Phone size={28} className='text-blue-400' />
              <div>
                <p className="text-gray-200 text-sm">Phone</p>
                <p className="text-white font-semibold">8302290182</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
            <div className="flex items-center gap-3">
              <Mail size={28} className='text-blue-400'/>
              <div>
                <p className="text-gray-200 text-sm">Email</p>
                <p className="text-white font-semibold">taufikkapoor382@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/40 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
            <div className="flex items-center gap-3">
              <MapPin size={28} className='text-blue-400' />
              <div>
                <p className="text-gray-200 text-sm">Location</p>
                <p className="text-white font-semibold">Baran, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
