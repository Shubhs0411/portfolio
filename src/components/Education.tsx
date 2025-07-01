'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
// Removed unused FaGraduationCap import

const educationHistory = [
  {
    institution: 'Virginia Tech',
    degree: <>
      Master&apos;s in Computer Science
      <br />
      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Specialization: AI and Data Analytics</span>
    </>,
    date: 'Aug 2023 – May 2025',
    gpa: '3.75/4.0',
    logo: '/logos/vt.png',
  },
  {
    institution: 'Vishwakarma Institute of Technology',
    degree: <>
      B.Tech in Electronics and Telecommunications
      <br />
      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Honors: AI and Data Analytics</span>
    </>,
    date: 'Aug 2018 – May 2022',
    gpa: '3.56/4.0',
    logo: '/logos/vit.png',
  },
]

// Sort in reverse chronological order (most recent first)
const sortedEducation = [...educationHistory].sort((a, b) => b.date.localeCompare(a.date))

export default function Education() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          My academic background and qualifications.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden md:block absolute w-px h-full bg-slate-300 dark:bg-slate-700 top-4 left-1/2 -translate-x-1/2"></div>

        {sortedEducation.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`mb-12 flex md:justify-between items-start w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Content */}
            <div className="w-full md:w-[calc(50%-2.5rem)]">
              <div className="p-4 sm:p-6 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-slate-700/80 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start md:items-center mb-3 sm:mb-4 space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/95 dark:bg-slate-800/80 shadow-md border border-slate-100/80 dark:border-slate-700/70 overflow-hidden">
                    <Image 
                      src={edu.logo} 
                      alt={`${edu.institution} Logo`} 
                      width={64} 
                      height={64}
                      className="object-contain max-w-full max-h-full p-2"
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.institution}</h3>
                    <div className="text-sm sm:text-md font-medium text-slate-700 dark:text-slate-300 mb-1 whitespace-normal">{edu.degree}</div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-end mt-auto">
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">{edu.date}</span>
                  <span className="text-sm sm:text-base font-extrabold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent ml-2">GPA: {edu.gpa}</span>
                </div>
              </div>
            </div>

            {/* Timeline Connector Dot */}
            <div className="hidden md:flex w-20 justify-center">
              <div className="w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500 z-10"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 