import React from 'react'
import { Code, Zap, Award } from 'lucide-react'

const Skills = () => {

  const skills = {
    teachical : ['React', 'Next.js', 'JavaScript', 'HTML / CSS', 'Node.js', 'Express.js', 'Mongodb', 'Tailwind CSS', 'Python', 'TypeScript'],
    graphic: ['Photoshop', 'Illustrator', 'CorelDraw'],
    soft: ['Problem Solving', 'Team Collaboration']
  }

  return (
    <section className='py-20 px-4 relative' id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          🛠 Skills & Expertise
        </h2>
        <p className="text-center text-gray-400 mb-16">Teachologies I work with</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/15 to-blue-600/15 border border-blue-500/30 rounded-xl p-8 hover:border-blue-400 transition">
           <div className="flex items-center gap-3 mb-6">
             <Code size={32} className='text-blue-400'/>
             <h3 className="text-2xl font-bold text-blue-400">Technical</h3>
           </div>

           <div className="space-y-3">
             {skills.teachical.map((skill, idx)=>  (
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <span className="text-gray-300 font-medium">{skill}</span>
              </div>
             ))}
           </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/15 to-cyan-600/15 border border-cyan-500/30 rounded-xl p-8 hover:border-blue-400 transition">
           <div className="flex items-center gap-3 mb-6">
             <Zap size={32} className='text-cyan-400'/>
             <h3 className="text-2xl font-bold text-cyan-400">Design</h3>
           </div>

           <div className="space-y-3">
             {skills.graphic.map((skill, idx)=>  (
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <span className="text-gray-300 font-medium">{skill}</span>
              </div>
             ))}
           </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/15 to-purple-600/15 border border-blue-500/30 rounded-xl p-8 hover:border-blue-400 transition">
           <div className="flex items-center gap-3 mb-6">
             <Award size={32} className='text-purple-400'/>
             <h3 className="text-2xl font-bold text-purple-400">Soft Skills</h3>
           </div>

           <div className="space-y-3">
             {skills.soft.map((skill, idx)=>  (
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <span className="text-gray-300 font-medium">{skill}</span>
              </div>
             ))}
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
