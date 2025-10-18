import React from 'react'

const CTA = () => {
  return (
    <section className='py-20 px-4 relative'>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ready to Create Something Amazing?</h2>

        <p className="text-xl text-gray-300 mb-8">Lets Collaborate on your next project</p>

        <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:taufikkapoor382@gmail.com" 
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-bold text-lg hover:shadow-blue-500/50 transition">
               📩 Send Email
            </a>
            <a href="https://github.com/Taifkapoor" 
            className="px-10 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-bold text-lg hover:bg-blue-400/10 transition">
                🔗 Github
            </a>
            <a href="mailto:taufikkapoor382@gmail.com" 
            className="px-10 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-bold text-lg hover:bg-blue-400/10 transition">
                💼 Linkdin
            </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
