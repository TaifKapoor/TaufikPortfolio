import React from 'react'
import { Github, ExternalLink, Star, TrendingUp } from 'lucide-react'

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Exclusive E-Commerce',
      description: 'Full-stack MERN e-commerce platform with secure authentication, shopping cart, order management, and integrated payment solutions.',
      tech: ['Next.js', 'MongoDB', 'Tailwind', 'Cloudinary'],
      emoji: '🛍️',
      gradient: 'from-cyan-500 to-blue-600',
      github: 'https://github.com/Taifkapoor/Exclusive',
      live: 'https://exclusive-wkif.vercel.app',
      features: ['User Authentication', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard'],
      highlight: 'Featured'
    },
    {
      id: 2,
      title: 'Rabbit E-Commerce',
      description: 'Complete MERN stack marketplace with PayPal integration, real-time inventory management, and responsive design.',
      tech: ['React', 'Express', 'MongoDB', 'PayPal'],
      emoji: '🐰',
      gradient: 'from-purple-500 to-pink-600',
      github: 'https://github.com/Taifkapoor/rabbit',
      live: 'https://rabbit-2.onrender.com',
      features: ['PayPal Gateway', 'Inventory System', 'User Reviews', 'Order Tracking'],
      highlight: 'Live'
    },
    {
      id: 3,
      title: 'Hotel Booking System',
      description: 'Modern hotel reservation platform with Clerk authentication, room management, and seamless booking experience.',
      tech: ['React', 'Clerk Auth', 'CSS3', 'React Router'],
      emoji: '🏨',
      gradient: 'from-green-500 to-emerald-600',
      github: 'https://github.com/Taifkapoor/HotelBooking',
      live: 'https://hotel-booking-q5pk.vercel.app',
      features: ['Room Selection', 'Date Picker', 'Secure Auth', 'Responsive UI'],
      highlight: 'New'
    },
    {
      id: 4,
      title: 'Skyfare Travel',
      description: 'Next.js-powered travel booking platform with stunning UI, destination browsing, and tour package management.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      emoji: '✈️',
      gradient: 'from-blue-500 to-cyan-600',
      github: 'https://github.com/Taifkapoor/Skyfare',
      live: 'https://skyfare-rho.vercel.app/',
      features: ['Tour Packages', 'Destination Gallery', 'Booking System', 'Smooth Animations'],
      highlight: 'Trending'
    }
  ]

  return (
    <section className='py-24 px-4 relative overflow-hidden' id="projects">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
            <Star className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-bold text-sm">PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Real-world applications built with modern tech stack and best practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className="group relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
              
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-500 h-full flex flex-col">
                {/* Project header with emoji */}
                <div className={`relative bg-gradient-to-br ${project.gradient} p-8 h-48 flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative text-8xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {project.emoji}
                  </div>
                  {/* Highlight badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 text-xs font-bold text-white flex items-center gap-1.5">
                    <TrendingUp size={14} />
                    {project.highlight}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-1.5 bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-cyan-400 rounded-lg text-xs font-bold transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 p-4 bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700/50">
                    <p className="text-xs text-gray-500 mb-3 font-bold uppercase tracking-wider">Key Features</p>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target='_blank'
                      rel='noopener noreferrer'
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 text-white py-3 rounded-xl transition-all duration-300 font-bold text-sm border border-slate-700 hover:border-slate-600 group/btn"
                    >
                      <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                    <a 
                      href={project.live} 
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-${project.gradient}/50 text-white py-3 rounded-xl transition-all duration-300 font-bold text-sm transform hover:scale-105 group/btn`}
                    >
                      <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl p-8">
            <p className="text-gray-300 mb-4 text-lg">Want to see more?</p>
            <a 
              href="https://github.com/Taifkapoor" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl font-bold shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project