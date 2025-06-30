// src/components/Contact.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import { FaGoogleScholar } from 'react-icons/fa6'
import { PhoneIcon } from '@heroicons/react/24/solid'
import emailjs from 'emailjs-com'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'shubhamdshmkh1@gmail.com',
    href: 'mailto:shubhamdshmkh1@gmail.com',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+1 (571) 245-3663',
    href: 'tel:+15712453663',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Falls Church, Virginia, United States',
    href: '#',
    color: 'from-purple-500 to-purple-600'
  }
]

const socialLinks = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shubhdesh/',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/Shubhs0411',
    color: 'from-gray-600 to-gray-700'
  },
  {
    icon: FaGoogleScholar,
    label: 'Google Scholar',
    href: 'https://scholar.google.co.uk/citations?view_op=list_works&hl=en&user=ezYZLzgAAAAJ',
    color: 'from-blue-400 to-blue-500'
  }
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    // Map EmailJS field names to our form state
    const fieldMap: { [key: string]: string } = {
      'user_name': 'name',
      'user_email': 'email',
      'message': 'message'
    }
    const stateField = fieldMap[name] || name
    setForm({ ...form, [stateField]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const result = await emailjs.sendForm(
        'service_zr9vx3i', // Replace with your EmailJS service ID
        'template_rfxbvel', // Replace with your EmailJS template ID
        e.target as HTMLFormElement,
        'iZtmE4yo2a_eHjzn_' // Replace with your EmailJS public key
      )
      
      console.log('Email sent successfully:', result.text)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      
      // Reset form
      const formElement = e.target as HTMLFormElement
      formElement.reset()
      
      // Hide success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Email error:', error)
      setStatus('error')
      
      // Hide error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
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
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let&apos;s discuss how we can work together to create something amazing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16">
        
        {/* Left: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus-ring"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus-ring"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus-ring resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-800 dark:text-green-200"
                >
                  ✅ Your message has been sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-800 dark:text-red-200"
                >
                  ❌ Oops! Something went wrong. Please try again or contact me directly via email.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    Try Again
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              Get in touch
            </h3>
            <p className="text-sm sm:text-base">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">{info.label}</div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              Follow me
            </h3>
            <p className="text-sm sm:text-base">
              Connect with me on social media to stay updated with my latest projects and insights.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-600"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">Available for opportunities</span>
            </div>
            <p className="text-xs sm:text-sm">
              I&apos;m currently accepting new projects and collaborations. Let&apos;s discuss how we can work together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
