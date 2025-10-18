import React from 'react'
import { } from 'lucide-react'

const Education = () => {
  return (
    <section className='py-20 px-4 relative' id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          🎓 Education
        </h2>

        <div className="space-y-6">
          <div className="bg-slate-800/40 backdrop-blur border-l-4 border-blue-500 rounded-lg p-6 hover:bg-slate-800/60 transition">
            <h3 className="text-2xl font-bold text-white mb-2"> 📚 B.Sc (2021-2023)</h3>
            <p className="text-cyan-400 font-semibold mb-2">University of Kota, Kota, Rajasthan</p>
            <p className="text-gray-400">Aggregate: <span className="text-blue-300 font-bold">
              67.3%
            </span>
            </p>
          </div>
          <div className="bg-slate-800/40 backdrop-blur border-l-4 border-blue-500 rounded-lg p-6 hover:bg-slate-800/60 transition">
            <h3 className="text-2xl font-bold text-white mb-2"> 📖 12th Standard (Secondary) - 2020</h3>
            <p className="text-cyan-400 font-semibold mb-2">Board of Secondary Education Rajasthan</p>
            <p className="text-gray-400">Aggregate: <span className="text-blue-300 font-bold">
              70%
            </span>
            </p>
          </div>
          <div className="bg-slate-800/40 backdrop-blur border-l-4 border-blue-500 rounded-lg p-6 hover:bg-slate-800/60 transition">
            <h3 className="text-2xl font-bold text-white mb-2"> 🖋 10th Standard - 2018</h3>
            <p className="text-cyan-400 font-semibold mb-2">Board of Secondary Education Rajasthan</p>
            <p className="text-gray-400">Aggregate: <span className="text-blue-300 font-bold">
              76%
            </span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/50 rounded-lg p-6 mt-6">
            <h3 className="text-2xl font-bold text-white mb-2">🏆 Certificatation</h3>
            <p className="text-gray-300">Certificate of  Excellence - Live Project Based Intership cum Training in Diploma in Web Designing(DWD) Samyak IT Solution Pvt. Ltd.</p>
            <p className="text-gray-400 mt-2">
              Duration: Dec 2023 - June 2024 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
