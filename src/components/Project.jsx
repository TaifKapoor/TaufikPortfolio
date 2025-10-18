import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

const Project = () => {

  const projects = [
    {
      id: 1,
      title: 'Hotel Booking Web Application',
      description: 'Designed and developed a responsive hotel booking website featuring room selection, booking form, and secure user authentication, and seamless navigation',
      teach: ['React', 'Clerk', 'CSS'],
      emoji: '🏫',
      github: 'https://github.com/Taifkapoor/HotelBooking',
      live: 'https://hotel-booking-q5pk.vercel.app',
      features: ['Room Selection', 'User Authentication', 'Responsive Design']
    },
    {
      id: 2,
      title: 'Rabbit E-Commerce (Full Stack)',
      description: 'Full-stack e-commerce platform with product listings, user authentication, and PayPal payment integration',
      teach: ['React', 'Express', 'MongoDB', 'PayPal'],
      emoji: '🛍',
      github: 'https://github.com/Taifkapoor/rabbit',
      live: 'https://rabbit-2.onrender.com',
      features: ['Room Selection', 'User Authentication', 'Responsive Design']
    },
    {
      id: 3,
      title: 'Travel Agency Website (Next.js)',
      description: 'Dynamic travel and tour booking web app built with Next.js, Fully responsive and optimized for mobile and desktop users.',
      teach: ['Next Js', 'Tailwind CSS'],
      emoji: '✈',
      github: 'https://github.com/Taifkapoor/Skyfare',
      live: 'https://skyfare-rho.vercel.app/',
      features: ['Room Selection', 'User Authentication', 'Responsive Design']
    },
  ]

  return (
    <section className='py-20 px-4 relative' id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-16">Crafted with precision and innovation</p>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={project.id}
              className="group relative bg-slate-800/40 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-blue-400 transform hover:scale-105 transition duration-300">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 h-48 flex items-center justify-center text-7xl group-hover:scale-110 transition duration-300">
                {project.emoji}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.teach.map((tech, i) => (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-semibold border border-blue-500/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-slate-900/50 rounded-lg">
                 <p className="text-xs text-gray-500 mb-2 font-bold">KEY FEATURES</p>
                 <ul className="text-xs text-gray-300 space-y-1">
                   {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                   ))}
                 </ul>
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  <a href={project.github} 
                  target='_blank'
                  rel='noopener noreferrer'
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-blue-600 text-white py-2 rounded-lg transition font-semibold text-sm"
                  >
                    <Github size={16}/> Github
                  </a>
                  <a href={project.live} 
                  target='_blank'
                  rel='noopener noreferrer'
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-blue-600 text-white py-2 rounded-lg transition font-semibold text-sm"
                  >
                    <ExternalLink size={16}/> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
