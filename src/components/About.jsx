import React from 'react'

const About = () => {
  return (
    <section className='py-20 px-4 relative' id="objective">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          🎯 My Objective
        </h2>
        <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/30 rounded-2xl p-8 backdrop-blur">
          <p className="text-lg text-gray-300 leading-relaxed">
            Highly motivated Frontend Developer with expertise in <span className="text-cyan-400 font-bold">HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap.</span>  Seeking to contribute to innovative web development projects by designing responsive and user-friendly interfaces. Additionally proficient in graphic design tools including <span className="text-cyan-400 font-bold">Photoshop and Illustrator.</span> Strong problem-solving skills with excellent team collaboration abilities
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
