'use client'

import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin, FaArrowDown, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import ParticleNetwork from './ParticleNetwork'

export default function Hero() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
      {/* Animated Particle Network Background */}
      <ParticleNetwork />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 lg:space-y-8"
          >
            {/* Greeting & Name */}
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl font-semibold text-blue-400 tracking-wide flex items-center justify-center lg:justify-start mb-2">
                <motion.span
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  className="inline-block mr-2"
                  role="img"
                  aria-label="waving hand"
                >
                  👋
                </motion.span>
                Hello, I&apos;m
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
                Shubham <span className="gradient-text">Deshmukh</span>
              </h1>
            </div>

            {/* Role */}
            <div className="space-y-4">
              <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent mb-2 tracking-wide font-sans">
                <Typewriter
                  words={[
                    'Machine Learning Engineer',
                    'Software Engineer',
                    'Full Stack Engineer',
                    'Data Engineer',
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </p>
              <p className="text-base sm:text-xl text-slate-300 font-medium mb-6 font-sans">
                Building intelligent, scalable solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="btn-primary group"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <FaArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
              <a
                href="/Shubham_Deshmukh_Resume.pdf"
                download
                className="btn-secondary"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 pt-6 lg:pt-8">
              <a href="https://github.com/Shubhs0411" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110" aria-label="GitHub">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/shubhdesh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://scholar.google.co.uk/citations?view_op=list_works&hl=en&user=ezYZLzgAAAAJ" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110" aria-label="Google Scholar">
                <FaGraduationCap className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse-glow"></div>
              
              <div className="relative w-48 h-48 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden border-4 border-slate-700/50 shadow-2xl mx-auto">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/hero-3d.png`}
                  alt="3D illustration of a developer working at a laptop with analytics icons"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg animate-float">
                ML Engineer
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                Full-Stack Dev
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-slate-400 animate-bounce" aria-label="Scroll to about section">
          <span className="text-xs sm:text-sm mb-2">Scroll to explore</span>
          <FaArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  )
}
