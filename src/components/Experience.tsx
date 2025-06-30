'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa'

const experiences = [
  {
    role: 'Graduate Research Assistant',
    company: 'Virginia Tech - A3 Lab - Commonwealth Cyber Initiative',
    logos: ['/logos/a3.png', '/logos/cci.png'],
    date: 'Aug 2024 – May 2025',
    location: 'Arlington, VA',
    description: [
      'Developed and compared 5 Deep Learning & Vision Transformer models using PyTorch, achieving best R² = 0.89 for optically active water quality prediction.',
      'Curated a novel pipeline for 500k+ RGB images with astral filtering and segmentation, reducing data by 40%.',
      'Enhanced U-Net water segmentation using GMM validation and CUDA, reducing processing time by 30%.',
    ],
    icon: FaGraduationCap,
    type: 'research',
  },
  {
    role: 'Software Developer Intern',
    company: 'J. Craig Venter Institute',
    logo: '/logos/jcvi.png',
    date: 'Jun 2024 – Aug 2024',
    location: 'Rockville, MD',
    description: [
      'Implemented D3.js and React to enhance HSP 3.0 Data Visualization, improving researchers engagement by 40%.',
      'Optimized Data pipeline using Python, R, Docker, and AWS (Lambda, S3), reducing manual intervention by 70%.',
      'Enhanced API queries, boosting database efficiency and decreasing data processing time by 20%.',
    ],
    icon: FaCode,
    type: 'internship',
  },
  {
    role: 'Software Developer',
    company: 'Wipro Ltd.',
    logo: '/logos/wipro.png',
    date: 'May 2022 – Jul 2023',
    location: 'Pune, India',
    description: [
      'Led development of 14 enterprise applications using ASP.NET Core, ensuring 100% on-time delivery.',
      'Administered Tableau Server, optimizing analytics data workflows and reducing report generation time by 15%.',
      'Resolved 42 Retail POS issues, boosting uptime by 20% and refining transaction reliability.',
    ],
    icon: FaBriefcase,
    type: 'full-time',
  },
   {
    role: 'Data Science Intern',
    company: 'IFM Engineering Pvt. Ltd.',
    logo: '/logos/ifm.png',
    date: 'Aug 2021 – Jan 2022',
    location: 'Pune, India',
    description: [
      'Developed a Real-Time Patient Monitoring System using YOLOv4-tiny and Mediapipe, attaining 95% accuracy.',
      'Integrated Deep Learning models & a Flask Web App, mitigating operational issues by 30%.',
      'Presented research at IEEE MysuruCon 2022, demonstrating 15% faster doctor response via optimized alerts.',
    ],
    icon: FaCode,
    type: 'internship',
  },
]

export default function Experience() {
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
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          My professional journey in software development, data science, and research.
        </p>
      </motion.div>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="hidden md:block absolute w-px h-full bg-slate-300 dark:bg-slate-700 top-4 left-1/2 -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`mb-12 flex md:justify-between items-start w-full ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className="w-full md:w-[calc(50%-2.5rem)]">
              <div className="p-3 sm:p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start md:items-center mb-3 sm:mb-4 space-x-3 sm:space-x-4">
                  {exp.logos ? (
                    <div className="flex space-x-1 sm:space-x-2">
                      {exp.logos.map((logo, i) => (
                        <div key={logo} className="w-8 h-8 sm:w-12 sm:h-12 bg-white border border-slate-200 shadow flex items-center justify-center overflow-hidden">
                          <Image src={logo} alt={`${exp.company} Logo ${i+1}`} width={32} height={32} className="object-contain max-w-full max-h-full" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image src={exp.logo} alt={`${exp.company} Logo`} width={32} height={32} className="object-contain flex-shrink-0" />
                  )}
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="text-xs sm:text-md font-medium text-slate-700 dark:text-slate-300">{exp.company} - {exp.location}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">{exp.date}</p>
                <ul className="space-y-2 list-disc list-outside ml-4 sm:ml-5 text-xs sm:text-sm leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
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