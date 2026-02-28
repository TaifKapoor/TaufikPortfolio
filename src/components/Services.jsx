// components/Services.jsx - NEW
import React from 'react'
import { Globe, Server, Smartphone, Palette } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      desc: 'Full-stack web applications with modern frameworks and best practices.',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design']
    },
    {
      icon: Server,
      title: 'API Development',
      desc: 'RESTful and GraphQL APIs with authentication and security.',
      features: ['REST API', 'GraphQL', 'JWT/OAuth']
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      desc: 'Mobile-first designs that work perfectly on all devices.',
      features: ['Mobile First', 'Cross Browser', 'Performance']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Beautiful interfaces with great user experience.',
      features: ['Figma Design', 'Prototyping', 'Animation']
    }
  ]

  return (
    <section className='py-24 px-4 relative bg-slate-900/30' id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">Services</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            What I <span className="text-cyan-400">Offer</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <service.icon size={28} className="text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feat, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services