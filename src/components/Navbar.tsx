// src/components/Navbar.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#articles' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentTheme = resolvedTheme || theme

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass dark:glass-dark rounded-2xl border border-white/20 dark:border-slate-700/30 transition-all duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-xl'
        }`}>
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo + Name */}
            <Link
              href="#home"
              className="flex items-center group select-none min-w-[40px]"
              onClick={() => setMenuOpen(false)}
            >
              <Image 
                src="/icon.svg" 
                alt="Logo" 
                width={32} 
                height={45} 
                className="group-hover:scale-110 transition-transform duration-300"
                unoptimized
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Theme Toggle + Mobile Menu */}
            <div className="flex items-center space-x-4 min-w-[80px]">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle Theme"
                className="p-2 rounded-xl hover:bg-white/10 dark:hover:bg-slate-700/50 transition-colors duration-300"
              >
                {mounted ? (
                  currentTheme === 'dark' ? (
                    <SunIcon className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <MoonIcon className="h-5 w-5 text-slate-800 dark:text-slate-200" />
                  )
                ) : (
                  <div className="h-5 w-5" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-xl hover:bg-white/10 dark:hover:bg-slate-700/50 transition-colors duration-300"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle Menu"
              >
                {menuOpen ? (
                  <XMarkIcon className="h-6 w-6 text-slate-800 dark:text-slate-200" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-slate-800 dark:text-slate-200" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-white/10 dark:border-slate-700/30 overflow-hidden"
              >
                <div className="px-6 py-4 space-y-3">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-center text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 py-3 rounded-lg hover:bg-white/5 dark:hover:bg-slate-700/30 text-base sm:text-lg"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}
