'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const certifications = [
  {
    name: 'Google Data Analytics ProfessionalCertificate',
    issuer: 'Google',
    date: 'Jun 2023',
    credentialId: '',
    url: 'https://www.credly.com/badges/fd159794-485e-4aac-991c-7588db1b6513/linked_in_profile',
    category: 'Data Analysis',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_logo.svg',
  },
  {
    name: 'Fundamentals of Accelerated Computing with CUDA C/C++',
    issuer: 'NVIDIA',
    date: 'Nov 2020',
    credentialId: '',
    url: 'https://learn.nvidia.com/certificates?id=d72eb01dc5da44a9bc7810559a0a4fd7',
    category: 'GPU Computing',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
  },
  {
    name: 'Generative Adversarial Networks (GANs) Specialization',
    issuer: 'Deeplearning.AI',
    date: 'Jul 2021',
    credentialId: '',
    url: 'https://www.coursera.org/account/accomplishments/specialization/N9AWQYZBMXLN?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n',
    category: 'Deep Learning',
    logo: 'https://assets.brandfetch.io/idT_c6rI_N/idu1Qw1QwN.png',
  }
]

const categoryColors = {
  'Data Analysis': 'from-blue-500 to-cyan-500',
  'GPU Computing': 'from-green-500 to-emerald-500',
  'Deep Learning': 'from-purple-500 to-pink-500',
}

export default function Certifications() {
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
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          Recognized certifications that validate my skills and expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full p-8 bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-700/80 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <span className={`inline-block px-4 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${categoryColors[cert.category as keyof typeof categoryColors]} text-white shadow-md`}>{cert.category}</span>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity duration-300 text-slate-500 hover:text-blue-500 border border-slate-300 dark:border-slate-700 rounded-full px-4 py-1 font-semibold text-sm flex items-center gap-2 bg-white/70 dark:bg-slate-800/70 shadow-sm"
                >
                  Show credential <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              </div>

              {/* Content */}
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                  {cert.name}
                </h3>
                <p className="text-base font-medium text-slate-600 dark:text-slate-400">
                  {cert.issuer}
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-500 pt-2">
                  Issued {cert.date}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 