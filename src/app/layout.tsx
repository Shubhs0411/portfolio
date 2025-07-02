// src/app/layout.tsx
import './globals.css'
import NavbarClient from '../components/NavbarClient'
import { Providers } from './providers'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Shubham Deshmukh - Software, Machine Learning, and Data Engineer',
  description: 'Portfolio of Shubham Deshmukh, a versatile engineer specializing in Full-Stack Development, Machine Learning, Data Engineering, and Cloud Solutions.',
  keywords: 'Software Engineer, Machine Learning Engineer, Data Engineer, Full-Stack Developer, React, Python, AWS, MLOps',
  authors: [{ name: 'Shubham Deshmukh' }],
  icons: {
    icon: '/$icon.svg',
  },
  openGraph: {
    title: 'Shubham Deshmukh - Software, Machine Learning, and Data Engineer',
    description: 'Portfolio showcasing expertise in Full-Stack Development, Machine Learning, Data Engineering, and Cloud Solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body
        suppressHydrationWarning
        className="transition-colors duration-300 overflow-x-hidden font-inter"
      >
        <Providers>
          {/* Skip-to-content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only fixed top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-xl z-50 shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Skip to content
          </a>

          {/* Navigation */}
          <NavbarClient />

          {/* Main Content */}
          <main id="main-content" className="pt-20">
            {children}
          </main>

          {/* Floating Resume Download Button */}
          <a
            href="/Shubham_Deshmukh_Resume.pdf"
            download
            className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-50 hover:scale-110 animate-pulse-glow"
            aria-label="Download Resume"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>

          {/* Background decoration */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
