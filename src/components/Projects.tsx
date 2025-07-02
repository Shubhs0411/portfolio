// src/components/Projects.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaEye,
  FaCode,
  FaRocket,
  FaTimes,
  FaCalendarAlt,
  FaUsers,
  FaStar,
} from 'react-icons/fa'
import Image from 'next/image'

const projects = [
  // --- Full-Stack Projects ---
  {
    title: 'Career Compass',
    description: 'Built RAG system using LLaMA-3-70B, ChromaDB, and LangChain over O*NET Data, reducing latency by 35%. Built responsive Next.js/Tailwind frontend and FastAPI-Groq backend, boosting user engagement by 30%. Deployed on AWS EC2 with Terraform and Tableau dashboards, boosting insights access and scalability by 25%.',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/career-compass.png`,
    github: '',
    demo: 'https://hdl.handle.net/10919/132469',
    tags: ['Next.js', 'FastAPI', 'AWS EC2', 'Terraform', 'LangChain', 'LLaMA-3-70B', 'ChromaDB', 'Tableau'],
    category: 'Full-Stack',
    featured: true,
    details: {
      role: 'Full-Stack Developer & ML Engineer',
      duration: '4 months',
      team: '8 members',
      challenges: 'Optimizing RAG system latency, integrating multiple AI models, AWS deployment',
      achievements: '35% latency reduction, 30% user engagement boost, 25% scalability improvement',
      technologies: ['Next.js', 'FastAPI', 'AWS EC2', 'Terraform', 'LangChain', 'LLaMA-3-70B', 'ChromaDB', 'Tableau', 'Groq API'],
      images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/career-compass-1.png`, `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/career-compass-2.png`, `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/career-compass-3.png`]
    }
  },
  {
    title: 'Human Salivary Proteome (HSP) 3.0 Visualization',
    description: 'Developed interactive data visualization tools for biotech research, improving user experience and accessibility of the HSP dataset.',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/hspw.png`,
    github: 'https://github.com/JCVenterInstitute/HSPW-V3',
    demo: '',
    tags: ['React', 'D3.js', 'AWS', 'Docker'],
    category: 'Full-Stack',
    featured: true,
    details: {
      role: 'SDE Intern',
      duration: '4 months',
      team: 'HSPW Team of 5 members',
      challenges: 'Complex data visualization, performance optimization for large datasets',
      achievements: 'Improved data accessibility, enhanced user experience for researchers',
      technologies: ['React', 'D3.js', 'AWS', 'Docker', 'TypeScript', 'CSS3'],
      images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/hspw-1.png`, `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/hspw-2.png`]
    }
  },
  // --- AI/ML/Computer Vision Projects ---
  {
    title: 'Patient Monitoring System Web Application',
    description: 'Led a team to develop a real-time prediction model for patient monitoring using YOLOv4-tiny, Mediapipe, and XGBoost. Achieved 95% accuracy and improved response time for healthcare professionals.',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/pms.png`,
    github: 'https://github.com/Shubhs0411/Patient-Monitoring-System',
    demo: '',
    tags: ['YOLOv4-tiny', 'Mediapipe', 'XGBoost', 'Flask', 'Computer Vision'],
    category: 'AI/ML & Computer Vision',
    featured: true,
    details: {
      role: 'Team Lead & ML Engineer',
      duration: '6 months',
      team: '3 members',
      challenges: 'Real-time processing, healthcare compliance, model accuracy',
      achievements: '95% accuracy, improved response time for healthcare professionals',
      technologies: ['YOLOv4-tiny', 'Mediapipe', 'XGBoost', 'Flask', 'Computer Vision', 'Python', 'OpenCV'],
      images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/pms-1.png`, `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/pms-2.png`, `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/pms-3.png`]
    }
  },
  {
    title: 'Blind Tourist Guide using VLMs',
    description: 'Developed an assistive system for visually impaired tourists using Vision-Language Models (VLMs) to provide real-time scene understanding and navigation assistance.',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/blind-tourist-guide.png`,
    github: '',
    demo: '',
    tags: ['Vision-Language Models', 'AI', 'Assistive Tech', 'Navigation'],
    category: 'AI/ML & Computer Vision',
    featured: false,
    details: {
      role: 'AI Research Engineer',
      duration: '2 months',
      team: 'Solo Project',
      challenges: 'Real-time VLM processing, accessibility requirements',
      achievements: 'Functional assistive system for visually impaired users',
      technologies: ['Vision-Language Models', 'Python', 'Computer Vision', 'Accessibility Tech'],
      images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/blind-guide-1.png`, `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/blind-guide-2.png`]
    }
  },
  {
    title: 'Document Summarizer',
    description: 'Built an AI-powered document summarization tool leveraging transformer models to generate concise and accurate summaries for long-form documents.',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/document-summarizer.png`,
    github: '',
    demo: '',
    tags: ['NLP', 'Transformers', 'Summarization', 'AI'],
    category: 'AI/ML & Computer Vision',
    featured: false,
    details: {
      role: 'NLP Engineer',
      duration: '2 months',
      team: 'Solo Project',
      challenges: 'Transformer model optimization, summary quality',
      achievements: 'Accurate document summarization tool',
      technologies: ['NLP', 'Transformers', 'Python', 'Hugging Face', 'Summarization'],
      images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/summarizer-1.png`, `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/summarizer-2.png`]
    }
  },
  // --- Web Development Projects ---
  {
    title: 'React-Portfolio',
    description: 'A dynamic portfolio built using React, JavaScript, HTML, and CSS, showcasing my projects and skills in front-end development and design.',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/react-portfolio.png`,
    github: 'https://github.com/Shubhs0411/React-Portfolio',
    demo: '',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'Web Development',
    featured: true,
    details: {
      role: 'Frontend Developer',
      duration: '2 months',
      team: 'Solo Project',
      challenges: 'Responsive design, modern UI/UX implementation',
      achievements: 'Professional portfolio showcasing skills and projects',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Responsive Design'],
      images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/react-portfolio-1.png`, `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/projects/react-portfolio-2.png`]
    }
  },
]

const categories = ['All', 'Full-Stack', 'AI/ML & Computer Vision', 'Web Development']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

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
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">
          A showcase of my work across different domains, from machine learning to full-stack development.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                {/* Project Image with fallback */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Show fallback gradient when image fails
                      const fallback = target.parentElement?.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.opacity = '1';
                      }
                    }}
                    unoptimized
                  />
                </div>
                
                {/* Fallback gradient overlay - hidden by default */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300">
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaCode className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-50" />
                  </div>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white dark:bg-slate-800 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2 sm:pt-4">
                  <div className="flex space-x-2 sm:space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110"
                        aria-label="View on GitHub"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110"
                        aria-label="View Demo"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaEye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl max-w-full w-full sm:max-w-4xl max-h-[90vh] modal-mobile-scroll overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-300"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Show fallback gradient when image fails
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.opacity = '1';
                      }
                    }}
                    unoptimized
                  />
                  {/* Fallback gradient - hidden by default */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaCode className="w-16 h-16 text-white opacity-50" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Project Overview</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FaUsers className="w-4 h-4 text-blue-500" />
                        <span className="text-slate-600 dark:text-slate-400">
                          <strong>Role:</strong> {selectedProject.details.role}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaCalendarAlt className="w-4 h-4 text-green-500" />
                        <span className="text-slate-600 dark:text-slate-400">
                          <strong>Duration:</strong> {selectedProject.details.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FaStar className="w-4 h-4 text-yellow-500" />
                        <span className="text-slate-600 dark:text-slate-400">
                          <strong>Team:</strong> {selectedProject.details.team}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenges & Achievements */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Key Challenges</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {selectedProject.details.challenges}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Achievements</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {selectedProject.details.achievements}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <FaGithub className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      View Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-600">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Want to see more?
          </h3>
          <p className="text-sm sm:text-base mb-6 max-w-2xl mx-auto">
            I&apos;m always working on new projects and exploring innovative solutions. Let&apos;s discuss how we can collaborate on your next big idea.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaRocket className="w-4 h-4" />
            Let&apos;s Work Together
          </a>
        </div>
      </motion.div>
    </div>
  )
}
