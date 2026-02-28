// components/Experience.jsx - NEW
import React from 'react'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Samyak IT Solution Pvt. Ltd.',
      period: 'Dec 2023 - June 2024',
      desc: 'Built full-stack web applications using MERN stack. Implemented authentication, payment gateways, and responsive UI components.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express']
    }
  ]

  return (
    <section className='py-24 px-4 relative bg-slate-900/30' id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">Experience</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Work <span className="text-cyan-400">History</span>
          </h3>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-slate-800" />
              <div className="hidden md:block absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-500 -translate-x-1" />
              
              <div className="md:ml-12 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Briefcase size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>
                <p className="text-slate-400 mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience