import React from 'react'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  return (
    <section className='py-24 px-4 relative overflow-hidden' id="education">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto rotate-3 hover:rotate-6 transition-transform duration-300 shadow-2xl shadow-purple-500/50">
              <GraduationCap size={40} className="text-white" />
            </div>
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-xl">Academic journey and certifications</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500"></div>

          {/* Education Item 1 - B.Sc */}
          <div className="relative mb-12 md:mb-20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full border-4 border-slate-900 shadow-lg transform -translate-x-1/2 z-10"></div>
              
              {/* Content */}
              <div className="md:w-1/2 md:pr-12 ml-20 md:ml-0 md:text-right">
                <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
                  2021 - 2023
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12 ml-20 md:ml-0">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="text-purple-400" size={28} />
                      <h3 className="text-2xl font-black text-white">Bachelor of Science (B.Sc)</h3>
                    </div>
                    <p className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                      <MapPin size={16} />
                      University of Kota, Rajasthan
                    </p>
                    <div className="inline-block bg-purple-500/20 border border-purple-500/50 rounded-lg px-4 py-2">
                      <span className="text-purple-300 font-bold text-sm">Grade: 67.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-4 border-slate-900 shadow-lg transform -translate-x-1/2 z-10"></div>
              
              {/* Content */}
              <div className="md:w-1/2 md:pr-12 ml-20 md:ml-0 md:text-right md:order-2">
                <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
                  Dec 2023 - June 2024
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12 ml-20 md:ml-0 md:order-1">
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="text-green-400" size={28} />
                      <h3 className="text-2xl font-black text-white">Certificate of Excellence</h3>
                    </div>
                    <p className="text-lg font-bold text-gray-200 mb-2">
                      Diploma in Web Designing (DWD)
                    </p>
                    <p className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                      <MapPin size={16} />
                      Samyak IT Solution Pvt. Ltd.
                    </p>
                    <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <span className="font-bold text-green-400">Live Project-Based Training:</span> Intensive 6-month program focused on full-stack web development with hands-on project experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Gained Section */}
        <div className="mt-20">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-white mb-6 text-center">What I've Learned</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: '💻', title: 'Full Stack Development', desc: 'MERN stack expertise' },
                  { icon: '🎨', title: 'UI/UX Design', desc: 'Modern design principles' },
                  { icon: '🚀', title: 'Deployment', desc: 'Cloud & production ready' }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="text-5xl mb-3">{item.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education