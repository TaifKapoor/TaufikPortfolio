// components/Skills.jsx
import React from 'react'

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'Framer Motion'],
      color: 'blue'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL', 'JWT Auth'],
      color: 'cyan'
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Postman', 'Figma'],
      color: 'purple'
    }
  ]

  return (
    <section className='py-24 px-4 relative' id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">My Skills</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Tech <span className="text-cyan-400">Stack</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-${cat.color}-500/20 to-${cat.color}-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition`} />
              <div className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition">
                <h4 className={`text-2xl font-bold text-${cat.color}-400 mb-6`}>{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm font-medium hover:bg-slate-700 transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind', 'Express', 'PostgreSQL'].map((tech, j) => (
                  <span key={j} className="text-4xl font-black text-slate-800 mx-4">{tech}</span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills