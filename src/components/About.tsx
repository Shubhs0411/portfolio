// src/components/About.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode, FaLightbulb } from 'react-icons/fa'

// Removed unused stats variable

const highlights = [
  {
    icon: FaGraduationCap,
    title: 'M.S. in Computer Science',
    description: 'Specializing in AI & Data Analytics at Virginia Tech.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaBriefcase,
    title: 'Industry Experience',
    description: '2+ years building scalable software and ML systems.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FaCode,
    title: 'Versatile Skill Set',
    description: 'Expertise in Full-Stack, Data Engineering, and MLOps.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: FaLightbulb,
    title: 'Innovative Problem-Solver',
    description: 'Passionate about creating data-driven, impactful solutions.',
    color: 'from-orange-500 to-orange-600'
  }
]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          A results-driven engineer with a passion for building intelligent systems and scalable, data-centric applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative flex justify-center lg:justify-start mb-8 lg:mb-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 dark:opacity-30"></div>
            
            <div className="relative w-40 h-40 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-slate-200 dark:border-slate-700 shadow-2xl mx-auto">
              <Image
                src="/profile.jpeg"
                alt="Shubham Deshmukh - Data Scientist and Full-Stack Developer"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg animate-float">
              Data Scientist
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              Full-Stack Dev
            </div>
          </div>
        </motion.div>
        
        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Main Description */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">
              I am a Master&apos;s student in Computer Science at Virginia Tech with a specialization in AI and Data Analytics. 
              My background combines hands-on experience in full-stack development, data engineering, and applied machine learning. 
              I am driven by the challenge of solving complex problems and have a proven track record of designing, developing, 
              and deploying robust software solutions and end-to-end ML pipelines.
            </p>
             <p className="text-base sm:text-lg leading-relaxed">
              From developing deep learning models for scientific research to engineering scalable enterprise applications, 
              I thrive at the intersection of data and software. I am passionate about leveraging my versatile skill set to 
              build innovative, efficient, and impactful products. I am actively seeking roles in Software Engineering, 
              Machine Learning, and Data Engineering.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-3 rounded-xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <highlight.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">{highlight.title}</h3>
                  <p className="text-xs sm:text-sm">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
